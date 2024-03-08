import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      <Image style={estilos.image} source={imagemAlternativa} />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>Nome do filme</Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}> Leia mais</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}> Salvar</Text>
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
