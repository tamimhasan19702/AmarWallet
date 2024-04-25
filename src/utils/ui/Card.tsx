/** @format */

import { View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  style?: ViewStyle;
}

const Card = ({ children, style = {} }: CardProps) => {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 15,
        backgroundColor: "white",
        elevation: 8,
        shadowColor: "black",
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Card;
