/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./ui/Card";
import { TransactionsByMonth } from "../utils/types";

const TransectionSummary = ({
  totalExpenses,
  totalIncome,
}: TransactionsByMonth) => {
  const savings = totalIncome - totalExpenses;
  const readablePeriod = new Date().toLocaleDateString("default", {
    month: "long",
    year: "numeric",
  });
  return (
    <Card>
      <Text>Summary for {readablePeriod}</Text>
    </Card>
  );
};

export default TransectionSummary;

const styles = StyleSheet.create({});
