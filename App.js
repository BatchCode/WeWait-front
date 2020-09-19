import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
// import NavigationStack from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer styles={styles}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
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
