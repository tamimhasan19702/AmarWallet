/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category, Transaction } from "./types";

interface TransectionListItemProps {
  transection: Transaction;
  categoryInfo: Category | undefined;
}

const TransectionListItem = ({
  transection,
  categoryInfo,
}: TransectionListItemProps) => {
  return (
    <View>
      <Text>
        {transection.description} - {transection.amount}
      </Text>
    </View>
  );
};

export default TransectionListItem;

const styles = StyleSheet.create({});
