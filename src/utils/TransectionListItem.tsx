/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category, Transaction } from "./types";
import Card from "./ui/Card";

import { categoryColors, categoryEmojies } from "./constants";
import { AntDesign } from "@expo/vector-icons";
import { Amount } from "./amount";
import CategoryItem from "./categoryItem";

interface TransectionListItemProps {
  transection: Transaction;
  categoryInfo: Category | undefined;
}

const TransectionListItem = ({
  transection,
  categoryInfo,
}: TransectionListItemProps) => {
  const iconName = transection.type === "Income" ? "caretup" : "caretdown";
  const color = transection.type === "Income" ? "green" : "red";
  // @ts-ignore: ignore typescript error
  const categoryColor = categoryColors[categoryInfo?.name ?? "Default"];
  // @ts-ignore: ignore typescript error
  const emoji = categoryEmojies[categoryInfo?.name ?? "Default"];

  return (
    <Card>
      {/* @ts-ignore */}
      <Amount amount={transection.amount} iconName={iconName} color={color} />
      <CategoryItem
        categoryColor={categoryColor}
        categoryInfo={categoryInfo}
        emoji={emoji}
      />
    </Card>
  );
};

export default TransectionListItem;
