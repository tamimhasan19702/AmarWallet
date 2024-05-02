/** @format */

import { Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const AddButton = ({
  setIsAddingTransection,
}: {
  setIsAddingTransection: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setIsAddingTransection(true)}
      activeOpacity={0.6}
      style={{
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007bff20",
        borderRadius: 15,
      }}>
      <MaterialIcons name="add-circle-outline" size={24} color={"#007bff"} />
      <Text style={{ fontWeight: "700", marginLeft: 5, color: "#007bff" }}>
        নতুন ট্রান্সকেশন
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;
