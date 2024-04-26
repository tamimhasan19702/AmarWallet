/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category } from "./types";

interface CategoryItemProps {
  categoryColor: string;
  categoryInfo: Category | undefined;
  emoji: string;
}

const CategoryItem = ({
  categoryColor,
  categoryInfo,
  emoji,
}: CategoryItemProps) => {
  return (
    <View
      style={[
        styles.categoryContainers,
        { backgroundColor: categoryColor + "40" },
      ]}>
      <Text style={styles.categoryText}>
        {emoji} {categoryInfo?.name}
      </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainers: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 12,
  },
});
