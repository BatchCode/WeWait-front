import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CustomBtn } from '../../utils/customBtn';

export default function ChooseProfile( {navigation} ) {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Text style={styles.txt}>Bienvenue sur WeWait'</Text>
            <Text style={styles.txtHint}>Veuillez vous authentifier pour continuer</Text>
            
            <CustomBtn title="Utilisateur" backgroundColor="#21aa38" width={150} 
                onPress={() =>
                    navigation.navigate('Login', {isWewaiter: false})
                }
            />
            <View style={styles.btnPadding} />
            <CustomBtn title="WeWaiter's" backgroundColor="#2b66cc" width={150} 
                onPress={() =>
                    navigation.navigate('Login', {isWewaiter: true})
                }
            />
        </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    txt: {
        marginTop: 28,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
    },
    txtHint: {
        fontSize: 12,
        textAlign: "left",
        marginBottom: 60

    },
    btnPadding: {
        marginBottom: 50,
    },
    logo: {
        marginTop: 20,
        height: 128,
        width: 128,
    },
})