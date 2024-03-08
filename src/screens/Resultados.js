import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import CardFilme from "../components/CardFilme";
import Separador from "../components/Separador";
import SemResultados from "../components/SemResultados";
//
export default function Resultados({ route }) {
  //  gerencia resultados da busca na API
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  // captura parametro filme de buscar filme
  const { filmeInput } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("search/movie", {
          params: {
            include_adult: false,
            language: "pt-br",
            query: filmeInput,
            api_key: apiKey,
          },
        });
        // adicionando a var resultados do state
        setResultados(resposta.data.results);

        // Se o try funcionar os resultados são trazidos logo false
        setLoading(false);
      } catch (error) {
        console.log("deu ruim");
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filmeInput} </Text>

        {/* se solading true renderize*/}
        {loading && (
          <ActivityIndicator size="large" color="#5451a6"></ActivityIndicator>
        )}

        <View style={estilos.viewFilmes}>
          <FlatList
            data={resultados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            // vem do flatlist
            ListEmptyComponent={() => <SemResultados />}
            ItemSeparatorComponent={() => <Separador></Separador>}
          />
        </View>
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
    width: "100%",
  },
  viewFilmes: {
    marginVertical: 4,
  },
});
