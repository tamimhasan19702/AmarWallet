/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category, Transaction } from "./types";
import Card from "./ui/Card";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { categoryColors, categoryEmojies } from "./constants";
import { AntDesign } from "@expo/vector-icons";

interface TransectionListItemProps {
  transection: Transaction;
  categoryInfo: Category | undefined;
}

const TransectionListItem = ({
  transection,
  categoryInfo,
}: TransectionListItemProps) => {
  const iconName =
    transection.type === "Income" ? "arrow-up-circle" : "arrow-down-circle";
  const color = transection.type === "Income" ? "green" : "red";
  // @ts-ignore: ignore typescript error
  const categoryColor = categoryColors[categoryInfo?.name ?? "Default"];
  // @ts-ignore: ignore typescript error
  const emoji = categoryEmojies[categoryInfo?.name ?? "Default"];

  return (
    <Card>
      <Text>
        {categoryInfo?.name} - {transection.amount}
      </Text>
    </Card>
  );
};

export default TransectionListItem;

interface AmountProps {
  iconName: "arrow-up-circle" | "arrow-down-circle";
  color: string;
  amount: number;
}

const Amount = ({ iconName, color, amount }: AmountProps) => {
  return (
    <View>
      <AntDesign name={iconName} size={18} color={color} />
      <AutoSizeText
        fontSize={32}
        mode={ResizeTextMode.max_lines}
        numberOfLines={1}
        style={{ color: color }}>
        ${amount}
      </AutoSizeText>
    </View>
  );
};

const styles = StyleSheet.create({});
