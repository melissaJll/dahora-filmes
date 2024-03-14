import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import SafeContainer from "../components/SafeContainer";
import tmdb from "../../assets/images/logo-tmdb.png";

export default function Favoritos() {
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
