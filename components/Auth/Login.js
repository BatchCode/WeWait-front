import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Change default opacity when user press it 
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function ChooseProfile({navigation, route}) {

    const [email, onChangeEmail] = React.useState('email@domain.com');
    const [password, onChangePwd] = React.useState('Mot de passe');
    
    let type;
    if (route.params.isWewaiter) { type = "wewaiter" } else { type = "user"; }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Text style={styles.txt}>Bienvenue sur WeWait'</Text>
            <Text style={styles.txtHint}>Veuillez vous authentifier pour continuer</Text>
            
            {/* <Text>you are: {type}</Text> */}

            <TextInput
                style={[styles.btn, styles.txtInput]}
                onChangeText={text => onChangeEmail(text)}
                value={email}
                />
            <View style={styles.txtInputPadding} />
            <TextInput
                style={[styles.btn, styles.txtInput]}
                onChangeText={text => onChangePwd(text)}
                value={password}
                />
            <View style={styles.btnPadding} />
            <CustomBtn title="Connexion" backgroundColor="#21aa38" width="150px" 
                onPress={() =>
                    // Check credentials
                    navigation.navigate('Home')
                }
                />
            <Text>{email}</Text>
            <Text>{password}</Text>
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
    txtInput: {
        height: 40,
        borderColor: 'black',
        backgroundColor: '#e6ebe7',
        borderWidth: 1
    },
    txtInputPadding: {
        marginBottom: 10,
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