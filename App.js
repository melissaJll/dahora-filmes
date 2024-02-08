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

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>Dá hora Filmes</Text>
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
              {" "}
              <Ionicons name="star" size={16} color="gold" /> Fvoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Button title="Privacidade"></Button>
          <Button title="Sobre"></Button>
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
  viewBotoes: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "82%",
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#5451a6",
    padding: 16,
  },
  textBotao: {
    color: "#fff",
  },
  viewRodape: {
    backgroundColor: "red",
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "82%",
  },
});
