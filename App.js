import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <Home></Home>
    </>
  );
}

const estilos = StyleSheet.create({});
