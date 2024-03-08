import { FlatList, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
//
export default function Resultados({ route }) {
  //  gerencia resultados da busca na API
  const [resultados, setResultados] = useState([]);

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

        <View style={estilos.viewFilmes}>
          <FlatList
            // prop data apontando para o state contendo os dados para a flatlist
            data={resultados}
            //Extraind chave/key de cada registro/item/filme único
            keyExtractor={(item) => item.id}
            //Prop que irá renderizar cada item/filme em um componente
            renderItem={({ item }) => {
              return <Text>{item.title}</Text>;
            }}
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
    marginVertical: 8,
  },
});
