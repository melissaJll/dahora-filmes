import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size="large" color="#5451a6"></ActivityIndicator>
    </View>
  );
}

const estilos = StyleSheet.create({
  viewLoading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 4,
  },
});
