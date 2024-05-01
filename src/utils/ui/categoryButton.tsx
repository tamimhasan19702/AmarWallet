/** @format */

import { Dispatch } from "react";
import { TouchableOpacity, Text } from "react-native";

interface CategoryButtonProps {
  id: number;
  title: string;
  isSelected: boolean;
  setTypeSelected: Dispatch<React.SetStateAction<string>>;
  setCategoryId: Dispatch<React.SetStateAction<number>>;
}

export const CategoryButton = ({
  id,
  title,
  isSelected,
  setTypeSelected,
  setCategoryId,
}: CategoryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setTypeSelected(title);
        setCategoryId(id);
      }}
      activeOpacity={0.6}
      style={{
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isSelected ? "#007bff20" : "#00000020",
        borderRadius: 15,
        marginBottom: 6,
      }}>
      <Text
        style={{
          fontWeight: "700",
          marginLeft: 5,
          color: isSelected ? "#007bff" : "#000000",
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
