import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ChooseUser({ navigation }) {
  const login = false

  //Si le login vaut true = Connecté sinon Déonnecté #2
  if (login){
    return ( 
      <View>
      <Text style={styles.connexion}>Connecté</Text> 
      <Text style={styles.hello}>Bienvenue sur WeWait'</Text>
      </View>
      )
  } else {
    return (
      <View>
        <Text style={styles.connexion}>Déconnecté</Text>
        <Text style={styles.hello}>Bienvenue sur WeWait'</Text>
        <View style={{marginTop:120}}>
        <Button color="#15DA6B" title="WeWaiter's"
                onPress={() =>
                  navigation.navigate('Connexion')}>
        </Button>
        </View>
        <View style={{marginTop:50}}>
        <Button title="Utilisateur"
                onPress={() =>
                  navigation.navigate('Connexion')}>
        </Button>
        </View>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    connexion: {
        marginTop : 10,
        marginLeft : 250 
       },
       hello: {
        marginTop: 50,
        marginLeft: 60,
        fontSize: 20,
      }
  });