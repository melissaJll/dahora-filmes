import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Criação/inicialização do mecanismo stack
const Stack = createNativeStackNavigator();

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Privacidade from "./src/screens/Privacidade";
import Resultados from "./src/screens/Resultados";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Resultados"
          screenOptions={{
            headerStyle: { backgroundColor: "#5451a6" },
            headerTintColor: "white",
          }}
        >
          {/* Cada página que será usada precisa de um stack.screen */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            // Desabilita o nome na home
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />
          <Stack.Screen
            name="BuscarFilmes"
            component={BuscarFilmes}
            options={{ title: "Qual Filmes quer pesquisar?" }}
          />
          <Stack.Screen
            name="Resultados"
            component={Resultados}
            options={{ title: "Detalhes" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
