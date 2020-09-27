import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseUser from './components/Connexion/ChooseUser';
import Connexion from './components/Connexion/Connexion';
import Home from './components/Home/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
       <NavRouter />
    </NavigationContainer>
  );
}

function NavRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChooseUser" component={ChooseUser} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
