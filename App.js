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
import SafeContainer from "./src/components/SafeContainer";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeContainer>
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
      </SafeContainer>
    </>
  );
}

const estilos = StyleSheet.create({
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
