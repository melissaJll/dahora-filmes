// src/screens/BuscarFilmes.js
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function BuscarFilmes() {
  const [textoInput, setTextoInput] = useState("");

  const respostaBusca = () => {
    if (textoInput == "") {
      Alert.alert("Ops!", " Você deve digitar um filme");
    } else {
      Alert.alert("Procurar por:", textoInput);
    }
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={estilos.texto}>
            Star Trek? O poderosos Chefão? A trilogia Senhor dos Anéis?
          </Text>
          <Text style={estilos.texto}>
            Localize um filme que você viu ou gostaria de ver!
          </Text>
          <View style={estilos.pesquisa}>
            <Ionicons name="film" color="#5451a6" size={45}></Ionicons>
            <TextInput
              style={estilos.input}
              placeholder="Buscar"
              value={setTextoInput}
              enterKeyHint="search"
            />
          </View>
          <Button onPress={respostaBusca} color="#5451a6" title="Procurar" />
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  input: {
    height: 40,
    width: "75%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#5451a6",
  },
  pesquisa: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  texto: {
    margin: 5,
  },
});
