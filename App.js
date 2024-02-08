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
            <Text style={estilos.textBotao}>Buscar Filmes</Text>
          </Pressable>

          <Pressable>
            <Text>Fvoritos</Text>
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
    backgroundColor: "orange",
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "82%",
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
