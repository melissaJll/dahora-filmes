import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Separador() {
  return (
    <View style={estilos.viewSeparador}>
      <MaterialCommunityIcons name="movie" size={18} color="#333091" />
      <MaterialCommunityIcons name="movie" size={18} color="#333091" />
      <MaterialCommunityIcons name="movie" size={18} color="#333091" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewSeparador: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 4,
  },
});
