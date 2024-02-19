import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import logo from "./assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("./assets/fonts/NotoSans-VariableFont.ttf"),
  });

  // Função atrelada ao useCallback
  //Quando uma função está conectada ao useCallBack, garantimos que a referencia dela é armazenada na memória apenas uma vez
  const aoAtualizarLayout = useCallback(async () => {
    // se estiver tudo ok com o carregamento
    if (fontsLoaded || fontError) {
      // Escondemos a splashscreen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView
        style={estilos.container}
        onAccessibilityAction={aoAtualizarLayout}
      >
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}>Dá hora Filmes</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textBotao}>
              <Ionicons name="search" size={16} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textBotao}>
              <Ionicons name="star" size={16} color="gold" /> Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textBotao}>
              <Ionicons name="lock-closed" size={16} color="white"></Ionicons>{" "}
              Privacidade
            </Text>
          </Pressable>

          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textBotao}>
              <Ionicons
                name="information-circle"
                size={16}
                color="white"
              ></Ionicons>{" "}
              Sobre
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "##7d4db8",
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  viewLogo: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "82%",
  },
  logo: {
    width: 128,
    height: 128,
  },
  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 31,
    color: "#5451a6",
  },
  viewBotoes: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "82%",
  },
  botao: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 3,
  },
  textBotao: {
    fontFamily: "NotoSans",
    color: "#fff",
    fontWeight: "bold",
  },
  viewRodape: {
    backgroundColor: "#5451a6",
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  botaoRodape: {
    padding: 16,
  },
});
