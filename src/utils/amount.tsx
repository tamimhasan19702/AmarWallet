/** @format */
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

interface AmountProps {
  iconName: "arrow-up-circle" | "arrow-down-circle";
  color: string;
  amount: number;
}

export const Amount = ({ iconName, color, amount }: AmountProps) => {
  return (
    <View style={styles.row}>
      {/* @ts-ignore */}
      <AntDesign name={iconName} size={18} color={color} />
      <AutoSizeText
        fontSize={32}
        mode={ResizeTextMode.max_lines}
        numberOfLines={1}
        style={[styles.amount, { maxWidth: "80%" }]}>
        ${amount}
      </AutoSizeText>
    </View>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 32,
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
