import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Login } from '../../services/LoginApi';
import { CustomBtn } from '../../utils/customBtn';

export default function ChooseProfile({navigation, route}) {

    let type;
    const [email, onChangeEmail] = React.useState('albert.dupont@gmail.com');
    const [pwd, onChangePwd] = React.useState('test');
    const [errMsg, setErrMsg] = React.useState();

    if (route.params.isWewaiter) { type = "wewaiter" } else { type =  "user"; }
    const login = () => {
        // Reset (in case of previous Login attempt)
        setErrMsg(null)
        
        Login(email, pwd, type)
            // .then(res => {
                // setErrMsg("HORRAY ! WE GOT A FUCKING JSON! \nBEARER " + res.token)
            // })
            .catch(err => setErrMsg(err.toString()))
    }


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Text style={styles.txt}>Bienvenue sur WeWait'</Text>
            <Text style={styles.txtHint}>Veuillez vous authentifier pour continuer</Text>
            
            <Text>you are: {type}</Text>

            <TextInput
                style={styles.txtInput}
                onChangeText={text => onChangeEmail(text)}
                value={email}
                />
            <View style={styles.txtInputPadding} />
            <TextInput
                style={styles.txtInput}
                onChangeText={text => onChangePwd(text)}
                value={pwd}
                secureTextEntry
                />
            <View style={styles.btnPadding} />
            
            <CustomBtn title="Connexion" backgroundColor="#21aa38" width={150} onPress={login} />
            {errMsg ? <Text>{errMsg}</Text> : null}
            
            {/* <Text>{email}</Text> */}
            {/* <Text>{pwd}</Text> */}
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
    txtInput: {
        height: 40,
        borderColor: 'black',
        backgroundColor: '#e6ebe7',
        borderWidth: 1,
        elevation: 8,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200
    },
    txtInputPadding: {
        marginBottom: 10,
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