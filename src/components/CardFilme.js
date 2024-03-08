import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      <Image style={estilos.image} source={imagemAlternativa} />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>Nome do filme</Text>
        <View>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}> Leia mais</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({});
