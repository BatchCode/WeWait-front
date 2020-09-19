import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.txt}>Bienvenue sur WeWait' !</Text>
            <Text styles={styles.txtHint}>Veuillez vous authentifier pour continuer</Text>
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
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
    },
    txtHint: {
        fontSize: 12,
        textAlign: "left"

    },
    logo: {
        height: 128,
        width: 128,
    },
})