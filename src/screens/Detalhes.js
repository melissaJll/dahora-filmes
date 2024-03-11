import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes({ route }) {
  // Extraindo dados
  const { filme } = route.params;
  //usar apenas assim e colocar "{filme.title}" ou desestruturar como abaixo
  /* . O motivo de desestruturar filme dessa maneira é para tornar o código mais conciso e acessar diretamente a propriedade desejada (filme) em vez de usar route.params.filme. 
  Equivalente a usar {filme} ao invés de props.filme.title  */

  const { title, release_date, overview, vote_average, backdrop_path } = filme;

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={
            backdrop_path
              ? { uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }
              : imagemAlternativa
          }
        >
          <Text style={estilos.titulo}>{title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView>
            <Text style={estilos.textoDestaque}>
              Avaliação:{" "}
              <Text style={estilos.texto}>{vote_average.toFixed(1)}</Text>
            </Text>
            <Text style={[estilos.textoDestaque, estilos.lancamento]}>
              Lançamento: <Text style={estilos.texto}>{release_date}</Text>
            </Text>
            <Text style={estilos.textoDestaque}>
              Descrição: <Text style={estilos.texto}>{overview}</Text>
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  imagemFundo: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  conteudo: {
    padding: 16,
    flex: 1 /* Apenas para garantir a ocupação do espaço em caso de texto muito grande */,
  },
  texto: {
    paddingVertical: 4,
    fontSize: 16,
  },
  avaliacao: { color: "blue" },
  lancamento: { color: "darkblue" },
  descricao: { color: "gray" },
});
