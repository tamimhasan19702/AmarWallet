/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Category, Transaction } from "./types";
import TransectionListItem from "./TransectionListItem";

interface TransectionListProps {
  transections: Transaction[];
  categories: Category[];
  deleteTransections: (id: number) => Promise<void>;
}

const TransectionList = ({
  transections,
  categories,
  deleteTransections,
}: TransectionListProps) => {
  return (
    <View style={{ gap: 18 }}>
      {transections.map((transection) => (
        <View>
          <TransectionListItem
            transection={transection}
            categoryInfo={categories.find(
              (category) => category.id === transection.category_id
            )}
            deleteTransections={deleteTransections}
          />
        </View>
      ))}
      {!transections.length && (
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
          No transections found 😅
        </Text>
      )}
    </View>
  );
};

export default TransectionList;

const styles = StyleSheet.create({});
