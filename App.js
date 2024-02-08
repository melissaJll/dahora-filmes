import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Text>Dá hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar filmes"></Button>
          <Button title="Favoritos"></Button>
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
    backgroundColor: "yellow",
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  viewLogo: {
    backgroundColor: "green",
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "82%",
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
