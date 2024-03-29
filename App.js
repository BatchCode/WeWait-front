import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import ChooseProfile from './components/Auth/ChooseProfile';
import Login from './components/Auth/Login';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer style={styles}>
            <Stack.Navigator>
                <Stack.Screen name="ChooseProfile" component={ChooseProfile} options={{ title: 'WeWait - Connexion' }}></Stack.Screen>
                <Stack.Screen name="Login" component={Login} options={{ title: 'WeWait - Connexion' }}></Stack.Screen>
                <Stack.Screen name="Home" component={Home} options={{ title: 'WeWait - Accueil' }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
