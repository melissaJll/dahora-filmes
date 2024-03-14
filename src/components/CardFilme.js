import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";
/* Hook necessário pois não estamos em uma tela com acesso
à prop navigation */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// filme ou props.filme.title
export default function CardFilme({ filme }) {
  // Extraindo as informações do filme titulo e capa, outros nomes para imagem e data estão no console
  const { title, poster_path } = filme;

  /* Acessar recursos de navegação */
  const navigation = useNavigation();

  const salvar = async () => {
    // Alert.alert("Salvando", "favoritos");
    try {
      /* 1. Verificar e carregar os favoritos armazenados no AsyncStorage. Usamos o
       getItem do AsyncStorage para analisaar se existe um armazenamento com o nome indicado (@nome). Existindo ele écarregado para a const filmesFavoritos.
       se não existir, será criado posteriormente*/
      const filmesFavoritos = await AsyncStorage.getItem(
        "@favoritosfilmesnahora"
      );

      // 2. Criar ou verificar uma lista de filmes favoritos (dados)

      // 3. Verificar se já tem algum filme na lista

      // 4. Se o filme não estiver na ByteLengthQueuingStrategy, vamos colocá-lo

      // 5. Usamos o AsyncStorage para gravar no armazenamento offline
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o filme...");
    }
  };

  return (
    <View style={estilos.card}>
      <Image
        style={estilos.image}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
            // prop filme definida na linha 12 contém todos os dados não apenas title e poste_path
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderWidth: 2,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
  },
  image: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: {
    flex: 2,
  },

  botao: {
    borderColor: "#5451a6",
    borderWidth: 1,
    padding: 8,
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
  titulo: {
    marginLeft: 3,
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
});
