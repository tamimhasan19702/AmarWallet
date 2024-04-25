/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Category, Transaction } from "../utils/types";
import { useSQLiteContext } from "expo-sqlite/next";

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
    console.log(result);
    setTransections(result);
  }
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
