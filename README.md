# DaHora Filmes

Exemplo de app nativo multiplataforma criado com React Native e Expo.

## Branch 10-processo-de-build-ou-compilacao

### Roteiro geral para o build usando o Expo EAS

1. Acessar a conta Expo e criar um projeto no Expo EAS: https://expo.dev
2. Instalar o eas-cli
3. Adicionar o id do projeto ao aplicativo (isso modificará o arquivo `app.json`)
4. Verificar a conta logada: `eas whoami`

- Se não estiver logado, use: `eas login`
- Se estiver logado e quiser deslogar (ou trocar de usuário), use: `eas logout`

5. Configurar o build (compilação): `eas build:configure`
6. Escolha Android e dê enter. Isso criará um arquivo chamado `eas.json`.
7. É necessário modificar o segmento `preview` dentro do `eas.json`, adicionando o código abaixo:

```json
"developmentClient" : true,
    "android" : {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
    },
```

8. Iniciar o processo de build/compilação: `eas build --profile preview`

## Branch 09-gerenciamento-de-favoritos

### Recursos nativos/lib: AsyncStorage

`AsyncStorage` é uma lib mantida pela equipe do Expo que permite armazenar dados **off-line** em formato de `string` no dispositivo do usuário. É uma lib semelhante á API web `localStorage` usada em sites

## Branch 08-tela-de-detalhes-do-filme

- Criação da tela `Detalhes.js` e adição dela à `Stack` em `App.js`
- Em `CardFilme`, utilização do hook `useNavigation` para funcionalidade de navegação do botão **Leia mais**.
- Em `App.js` na `stack.Screen.Detalhes`, adicionamos uma prop `options` configurada para exibirum `Button` responsável por permitir a navegação direta para `Home`

## Branch 07-melhorias-nos-resultados

- Loading usando `ActivityIndicator`
- Em `Resultados`, aplicamos à `FlatList` componentes personalizados para o caso de não haver filmes na busca (`NaoEncontrado/ListEmptyComponent`) e
  para separar cada elemento da `FlatList` (`Separador/ItemSeparatorComponent`)
- Em `CardFilme` colocamos uma condicional para o carregamento de imagem alternativa caso algum filme não tenha imagem, e também ícones nos botões.

## Branch 06-tela-de-resultados-e-programação-api

### Resumo

#### API de Filmes

- Cadastro na API TheMovieDB
- Criação de uma chave de API (API Key)
- Configuração de variável ambiente através do arquivo `.env` contendo a API Key via Expo. (arquivo ENV são ignorados no versionamento)

# Branch 05

### Solução: recursos utilizados

- componentes/recursos nativos: `textInput`, `Button`, `vibration`e `alert`
- Eventos:
- `OnchangeText` no `TextInput` para captura em tempo real do filme digitado e eatualização do `state` usando a função `FilmeInput`

# Branch 04

Para gerenciar os recursos de navegação é necessario usatr uma biblioteca de navegação
as mais conhecidas são a **React Navigaton** e a **Expo Router**.

Atualmente (fevereiro/2024) a biblioteca mais usada e considerada padrão é a **React Navigation** e a **Expo Router**

- React Navigation: https://reactnavigation.org
- Expo Router: https://docs.expo.dev/router/introduction

`npm install @react-navigation/native`

Dependências para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

`npm install @react-navigation/native-stack`

#### Configurações

No `app.js` importamos o `NavigationContainer` e o `createNativeStackNavigator`, em seguida os configuramos para determinat o `Stack.Navigator` e as telas `Stack.Screen` e seus componentes correspondentes(no momento, apenas `Home`, `Privacidade`, `Sobre`)

# Branch 03

- Criação das telas básicas: Sobre Privacidade
- Componentes `ScrollView` para conteudos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para web

## Branch 02

### Utilização de fontes adicionais

- Download dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxílio dos `hooks` `useFonts` e `useCallback`.
- Aplicação das fontes usando regras de StyleSheet.

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/

---

## Dica

Instale a extensão **ES7+ React...** no VSCode para facilitar a programação de componentes.
