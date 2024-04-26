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
        <TouchableOpacity
          key={transection.id}
          onPress={() => deleteTransections(transection.id)}
          activeOpacity={0.7}>
          <TransectionListItem
            transection={transection}
            categoryInfo={categories.find(
              (category) => category.id === transection.category_id
            )}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TransectionList;

const styles = StyleSheet.create({});
