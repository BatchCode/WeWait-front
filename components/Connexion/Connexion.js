import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Connexion({navigation}) {

    const [Name, NameValue] = React.useState('Name');
    const [Pwd, PwdValue] = React.useState('Password');

    return ( 
        <View>
        <Text>Connexion</Text> 
        <TextInput
        style = {{ height:40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => NameValue(text)}
        value={Name}
        />
        <TextInput
        style = {{ height:40, borderColor: "gray", borderWidth: 1}}
        onChangeText={text => PwdValue(text)}
        value={Pwd}
        />
        <Button title="Connexion"
                onPress={() =>
                  navigation.navigate('Home')}>
        </Button>

        </View>
        )

}