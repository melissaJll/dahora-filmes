import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";
/* Hook necessário pois não estamos em uma tela com acesso
à prop navigation */
import { useNavigation } from "@react-navigation/native";

// filme ou props.filme.title
export default function CardFilme({ filme, navigation }) {
  // Extraindo as informações do filme titulo e capa
  const { title, poster_path } = filme;

  /* Acessar recursos de navegação */
  const navigation = useNavigation();

  //   mesmo sem loopoing exibe os cards
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes")}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
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
