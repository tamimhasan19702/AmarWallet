/** @format */

import { StyleSheet, Text, TextStyle, View } from "react-native";
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

  const getMoneyTextStyle = (value: number): TextStyle => ({
    fontWeight: "800",
    color: value < 0 ? "red" : "green",
  });

  const formatMoney = (value: number) => {
    const absValue = Math.abs(value).toFixed(2);
    return `${value >= 0 ? "+" : "-"}$${absValue}`;
  };

  return (
    <Card style={styles.container}>
      <Text style={styles.periodTitle}>Summary for {readablePeriod}</Text>
      <Text style={styles.summaryText}>
        Income : {""}
        <Text style={getMoneyTextStyle(totalIncome)}>
          {formatMoney(totalIncome)}
        </Text>
      </Text>
      <Text style={styles.summaryText}>
        Expense : {""}
        <Text style={getMoneyTextStyle(totalExpenses)}>
          {formatMoney(totalExpenses)}
        </Text>
      </Text>
      <Text style={styles.summaryText}>
        Savings :{" "}
        <Text style={getMoneyTextStyle(savings)}>{formatMoney(savings)}</Text>
      </Text>
    </Card>
  );
};

export default TransectionSummary;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingBottom: 7,
  },
  periodTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#333",
    marginBottom: 15,
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
});
