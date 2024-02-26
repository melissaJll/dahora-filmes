// src/screens/BuscarFilmes.js
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";

export default function BuscarFilmes() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={estilos.titulo}>
            Star Trek? O poderosos Chefão? A trilogia Senhor dos Anéis?
          </Text>
          <Text>Localize um filme que você viu ou gostaria de ver!</Text>
          <Ionicons
            name="information-circle"
            size={16}
            color="white"
          ></Ionicons>
          <TextInput style={estilos.input} placeholder="useless placeholder" />
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
