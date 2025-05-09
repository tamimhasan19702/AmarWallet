/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Category, Transaction } from "./types";
import Card from "./ui/Card";

import { categoryColors, categoryEmojies } from "./constants";
import { AntDesign } from "@expo/vector-icons";
import { Amount } from "./amount";
import CategoryItem from "./categoryItem";
import TransectionInfo from "./TransectionInfo";

interface TransectionListItemProps {
  transection: Transaction;
  categoryInfo: Category | undefined;
  deleteTransections: (id: number) => Promise<void>;
}

const TransectionListItem = ({
  transection,
  categoryInfo,
  deleteTransections,
}: TransectionListItemProps) => {
  const iconName = transection.type === "Income" ? "caretup" : "caretdown";
  const color = transection.type === "Income" ? "green" : "red";
  // @ts-ignore: ignore typescript error
  const categoryColor = categoryColors[categoryInfo?.name ?? "Default"];
  // @ts-ignore: ignore typescript error
  const emoji = categoryEmojies[categoryInfo?.name ?? "Default"];

  return (
    <Card>
      <View style={styles.row}>
        <View style={{ width: "40%", gap: 3 }}>
          <Amount
            amount={transection.amount}
            /* @ts-ignore */
            iconName={iconName}
            color={color}
          />
          <CategoryItem
            categoryColor={categoryColor}
            categoryInfo={categoryInfo}
            emoji={emoji}
          />
        </View>
        <TransectionInfo
          date={transection.date}
          id={transection.id}
          description={transection.description}
        />
        <TouchableOpacity
          key={transection.id}
          onPress={() => deleteTransections(transection.id)}
          activeOpacity={0.7}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default TransectionListItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
