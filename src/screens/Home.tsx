/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Category, Transaction } from "../utils/types";
import { useSQLiteContext } from "expo-sqlite/next";
import TransectionList from "../utils/TransectionList";

const HomeScreen = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [transections, setTransections] = useState<Transaction[]>([]);

  const db = useSQLiteContext();

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData() {
    const result = await db.getAllAsync<Transaction>(
      "SELECT * FROM Transactions ORDER By date DESC"
    );

    setTransections(result);

    const CategoriesResult = await db.getAllAsync<Category>(
      "SELECT * FROM Categories"
    );

    setCategory(CategoriesResult);
  }

  async function deleteTransection(id: number) {
    await db.runAsync(`DELETE FROM Transactions WHERE id = ${id}`);
    await getData();
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      <TransectionList
        categories={category}
        transections={transections}
        deleteTransections={deleteTransection}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
