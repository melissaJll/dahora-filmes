import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SemResultados() {
  return (
    <View style={estilos.aviso}>
      <Text style={estilos.titulo}>Não encontramos o seu filme</Text>

      <MaterialIcons
        style={estilos.icon}
        name="report-problem"
        size={74}
        color="#db4227"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  aviso: {
    display: "flex",
    alignItems: "center",
    marginVertical: 30,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5451a6",
    marginBottom: 8,
  },
});
