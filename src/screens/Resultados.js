import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}></Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },

  texto: {
    marginVertical: 8,
  },
});
