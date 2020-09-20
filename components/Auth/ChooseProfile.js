import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Change default opacity when user press it 
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function ChooseProfile( {navigation} ) {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Text style={styles.txt}>Bienvenue sur WeWait'</Text>
            <Text style={styles.txtHint}>Veuillez vous authentifier pour continuer</Text>
            
            <CustomBtn title="Utilisateur" backgroundColor="#21aa38" width="150px" 
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
            <View style={styles.btnPadding} />
            <CustomBtn title="WeWaiter's" backgroundColor="#2b66cc" width="150px" 
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    )
}

const CustomBtn = ({ onPress, title, backgroundColor, width}) => (
    <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.btn,
            backgroundColor && { backgroundColor },
            width && { width },
        ]}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
)

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
    btn: {
        elevation: 8,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    btnText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    logo: {
        marginTop: 20,
        height: 128,
        width: 128,
    },
})