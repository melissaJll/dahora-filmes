// RNFS
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SafeContainer({ children }) {
  return <SafeAreaView style={estilos.container}>{children}</SafeAreaView>;
}

const estilos = StyleSheet.create({});
