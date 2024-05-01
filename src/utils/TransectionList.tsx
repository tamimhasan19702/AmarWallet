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
    <View style={{ gap: 15 }}>
      {transections.map((transection) => {
        const categoryForCurrentItem = categories.find(
          (category) => category.id === transection.category_id
        );
        return (
          <TouchableOpacity
            key={transection.id}
            activeOpacity={0.7}
            onLongPress={() => deleteTransections(transection.id)}>
            <TransectionListItem
              transection={transection}
              categoryInfo={categoryForCurrentItem}
              deleteTransections={deleteTransections}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TransectionList;

const styles = StyleSheet.create({});
