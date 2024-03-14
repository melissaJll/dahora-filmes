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
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos() {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  // UseEffect será disposto assim que o usuário entrar na tela favoritos(portanto, somente uma vez)
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const dados = await AsyncStorage.getItem("@favoritosfilmesnahora");
        if (dados) {
          setListaFavoritos(JSON.parse(dados)); //agora listaFavoritos recebeu dados (que foi convetido de string para objeto)
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
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          <Pressable style={estilos.BotaoExcluirFavoritos}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash" size={15} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((itemFavorito) => {
            return (
              <View style={estilos.item}>
                <Pressable style={estilos.botaoItem}>
                  <Text style={estilos.titulo}>{itemFavorito.title} </Text>
                </Pressable>
                <Pressable>
                  <Text>
                    <Ionicons name="trash" size={19}></Ionicons>
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
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
  viewFavoritos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 8,
  },
  BotaoExcluirFavoritos: {
    borderColor: "e1d7fa",
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#e85a41",
    borderColor: "#e85a41",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    backgroundColor: "#e1d7fa",
    padding: 15,
    marginVertical: 6,
    borderRadius: 5,
  },
});
