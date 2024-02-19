import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
  Pressable,
  ScrollView,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import tmdb from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={estilos.subTitulo}>Sobre o app DaHora Filmes</Text>
          <Text style={estilos.texto}>
            O <Text style={estilos.nomeApp}>DaHora Filmes</Text> é um aplicativo
            com a finalidade de permitir a busca por informações sobre filmes
            existentes na base de dados pública disponibilizada pelo site The
            Movie Database (TMDb).
          </Text>

          <Pressable
            onPress={() => Linking.openURL("https://www.themoviedb.org/")}
          >
            <View style={estilos.logoTmdb}>
              <Image resizeMode="contain" source={tmdb}></Image>
            </View>
          </Pressable>

          <Text style={estilos.texto}>
            Ao localizar um filme, o usuário pode visualizar informações como
            título, data de lançamento, nota média de avaliação e uma breve
            descrição sobre o filme e, caso queira, salvar estas informações em
            uma lista no próprio aplicativo para visualização posterior.
          </Text>

          <Text style={estilos.texto}>
            O aplicativo poderá receber novos recursos conforme o feedback e
            demanda dos usuários.
          </Text>
          <Text style={estilos.texto}>DaHora Filmes &copy; 2024</Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  // reescreve container{} de safeConstainer
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subTitulo: {
    // fontes importadas em SafeConstainer
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#7d4db8",
  },
  logoTmdb: {
    // display: "flex",
    alignItems: "center",
    marginVertical: 5,
  },
});
