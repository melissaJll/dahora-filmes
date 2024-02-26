import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Criação/inicialização do mecanismo stack
const Stack = createNativeStackNavigator();

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Cada página que será usada precisa de um stack.screen */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            // Desabilita o nome na home
          />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Privacidade" component={Privacidade} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
