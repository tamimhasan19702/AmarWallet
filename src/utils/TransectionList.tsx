/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Category, Transaction } from "./types";

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
    <View>
      {transections.map((transection) => (
        <TouchableOpacity
          key={transection.id}
          onPress={() => deleteTransections(transection.id)}
          activeOpacity={0.7}>
          <Text>
            {transection.description} - {transection.amount}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TransectionList;

const styles = StyleSheet.create({});
