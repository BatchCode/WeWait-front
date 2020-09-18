import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

export default function Home() {

    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
      };
      

    return ( 
        <View style={styles.container}>
            <Text> WeWait'</Text>
            <View style={{ flex:1, flexDirection: 'row'}}>
                <Button title="Home" ></Button>
                <Button title="Event'" ></Button>
                <Button title="Concert" ></Button>
            </View>
         <ScrollView>
            <Text style={{ fontSize: 20, color: 'gray' }}>Populaire en ce moment</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
        </ScrollView>
        </View>
        )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
  });