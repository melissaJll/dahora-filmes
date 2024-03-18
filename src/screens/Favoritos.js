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

export default function Favoritos({ navigation }) {
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

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos",
      [
        /* Propriedade style (aparência do botão):
        SOMENTE NO IOS que faz diferença */
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim, manda ver",
          style: "destructive",
          onPress: async () => {
            // Removemos nosso storage de favoritos
            await AsyncStorage.removeItem("@favoritosfilmesnahora");

            // Atualizamos o state para sejam removidos da tela
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  const excluir = async (idFilme) => {
    /* Gerar uma nova lista de favoritos EXCETO o filme
    que será removido */
    const novaListaDeFavoritos = listaFavoritos.filter(
      (filmeDaLista) => filmeDaLista.id !== idFilme
    );

    /* Atualizar o state (memória) com os dados da nova lista SEM o filme removido */
    setListaFavoritos(novaListaDeFavoritos);

    /* Atualizar o storage (memória física) com os dados da nova lista SEM o filme removido */
    await AsyncStorage.setItem(
      "@favoritosfilmesnahora",
      JSON.stringify(novaListaDeFavoritos)
    );
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          {listaFavoritos.length > 0 && (
            <Pressable
              onPress={excluirTodosFavoritos}
              style={estilos.botaoExcluirFavoritos}
            >
              <Text style={estilos.textoBotao}>
                <Ionicons name="trash-outline" size={16} /> Excluir favoritos
              </Text>
            </Pressable>
          )}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                  style={estilos.botaoItem}
                >
                  <Text style={estilos.titulo}>{filme.title} </Text>
                </Pressable>
                <Pressable
                  onPress={() => excluir(filme.id)}
                  style={estilos.botaoExcluir}
                >
                  <Text>
                    <Ionicons
                      name="trash-outline"
                      color="white"
                      size={19}
                    ></Ionicons>
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
  botaoExcluirFavoritos: {
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
  titulo: { fontSize: 14 },
  botaoExcluir: {
    backgroundColor: "#de4e4e",
    padding: 4,
    borderRadius: 4,
  },
});
