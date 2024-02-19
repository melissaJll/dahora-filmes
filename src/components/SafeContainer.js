// RNFS
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("../../assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
  });

  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={aoAtualizarLayout} style={estilos.container}>
      {children}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    // backgroundColor: "#7d4db8",
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
});
