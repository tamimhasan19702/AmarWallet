/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TransectionInfoProps {
  id: number;
  date: number;
  description: string;
}

const TransectionInfo = ({ id, date, description }: TransectionInfoProps) => {
  return (
    <View style={{ flexGrow: 1, gap: 6, flexShrink: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: "800" }}>{description}</Text>
      <Text>Transection number : {id}</Text>
      <Text style={{ fontSize: 16, color: "gray" }}>
        {new Date(date * 1000).toLocaleDateString()}
      </Text>
    </View>
  );
};

export default TransectionInfo;

const styles = StyleSheet.create({});
