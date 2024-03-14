import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favoritos() {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  // UseEffect será disposto assim que o usuário entrar na tela favoritos(portanto, somente uma vez)
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const dados = await AsyncStorage.getItem("@favoritosfilmesnahora");
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.log("erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Problemas ao carregar os dados");
      }
    };
    carregarFavoritos();
  }, []);

  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Favoritos...</Text>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  texto: {
    marginVertical: 8,
  },
});
