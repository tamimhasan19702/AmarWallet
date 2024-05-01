/** @format */

import { useSQLiteContext } from "expo-sqlite/next";
import { Transaction } from "../utils/types";
import { useEffect, useState } from "react";
import { Category } from "../utils/types";
import { TextInput, View, Text } from "react-native";
import AddButton from "./ui/AddButton";
import Card from "./ui/Card";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { CategoryButton } from "./ui/categoryButton";
import { Button } from "react-native-paper";

export default function AddTransactions({
  insertTransaction,
}: {
  insertTransaction(transaction: Transaction): Promise<void>;
}) {
  const [isAddingTransaction, setIsAddingTransaction] =
    useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [categories, setCategories] = useState<{ name: string }[]>([]);
  const [typeSelected, setTypeSelected] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("Expense");
  const [categoryId, setCategoryId] = useState<number>(1);
  const db = useSQLiteContext();

  useEffect(() => {
    getExpenseType(currentTab);
  }, [currentTab]);

  async function getExpenseType(currentTab: number) {
    setCategory(currentTab === 0 ? "Expense" : "Income");
    const type = currentTab === 0 ? "Expense" : "Income";

    const result = await db.getAllAsync<Category>(
      `SELECT * FROM Categories WHERE type = ?;`,
      [type]
    );
    setCategories(result);
  }

  async function handleSave() {
    console.log({
      amount: Number(amount),
      description,
      category_id: categoryId,
      date: new Date().getTime() / 1000,
      type: category as "Expense" | "Income",
    });

    // @ts-ignore
    await insertTransaction({
      amount: Number(amount),
      description,
      category_id: categoryId,
      date: new Date().getTime() / 1000,
      type: category as "Expense" | "Income",
    });
    setAmount("");
    setDescription("");
    setCategory("Expense");
    setCategoryId(1);
    setCurrentTab(0);
    setIsAddingTransaction(false);
  }

  return (
    <View style={{ marginBottom: 15 }}>
      {isAddingTransaction ? (
        <View>
          <Card>
            <TextInput
              placeholder="$Amount"
              style={{ fontSize: 32, marginBottom: 15, fontWeight: "bold" }}
              keyboardType="numeric"
              onChangeText={(text) => {
                // Remove any non-numeric characters before setting the state
                const numericValue = text.replace(/[^0-9.]/g, "");
                setAmount(numericValue);
              }}
            />
            <TextInput
              placeholder="Description"
              style={{ marginBottom: 15 }}
              onChangeText={setDescription}
            />
            <Text style={{ marginBottom: 6 }}>Select a entry type</Text>
            <SegmentedControl
              values={["Expense", "Income"]}
              style={{ marginBottom: 15 }}
              selectedIndex={0}
              onChange={(event) => {
                setCurrentTab(event.nativeEvent.selectedSegmentIndex);
              }}
            />
            {categories.map((cat) => (
              <CategoryButton
                key={cat.name}
                // @ts-ignore
                id={cat.id}
                title={cat.name}
                isSelected={typeSelected === cat.name}
                setTypeSelected={setTypeSelected}
                setCategoryId={setCategoryId}
              />
            ))}
          </Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 15,
            }}>
            <Button
              mode="contained"
              style={{ paddingLeft: 20, paddingRight: 20 }}
              onPress={() => setIsAddingTransaction(false)}
              buttonColor={"red"}
              textColor="white">
              Cancel
            </Button>
            <Button
              mode="contained"
              style={{ paddingLeft: 20, paddingRight: 20 }}
              onPress={handleSave}
              buttonColor={"green"}
              textColor="white">
              save
            </Button>
          </View>
        </View>
      ) : (
        <AddButton setIsAddingTransection={setIsAddingTransaction} />
      )}
    </View>
  );
}
