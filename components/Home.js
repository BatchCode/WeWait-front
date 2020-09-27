import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { CustomBtn } from '../utils/customBtn';

export default function Home() {

  const logo = {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      width: 64,
      height: 64
    };

  return (
    <View style={styles.container}>
      <Text> WeWait</Text>
        <View style={{ flexDirection: 'row'}}>
          <CustomBtn title="Home" backgroundColor="red" width={100} ></CustomBtn>
          <CustomBtn title="Event" backgroundColor="blue" width={100} ></CustomBtn>
          <CustomBtn title="Concert" backgroundColor="green" width={100} ></CustomBtn>
        </View>

        <Text style={{ fontSize: 20, color: 'gray' }}>Populaire en ce moment</Text>
        <ScrollView style={{width: "98%" }} horizontal={true}>
          <View style={[styles.container, {flexDirection: "row"}]} >
            <Image style={styles.card} source={logo} />
            <Image style={styles.card} source={logo} />
            <Image style={styles.card} source={logo} />
            <Image style={styles.card} source={logo} />
            <Image style={styles.card} source={logo} />
            <Image source={logo} />
            <Image source={logo} />
          </View>
        </ScrollView>

        <Text style={{ fontSize: 20, color: 'gray' }}>Près de chez vous</Text>
        <ScrollView style={styles.scrollHoriz} horizontal={true}>
          <View style={[styles.container, {flexDirection: "row"}]} >
            <Image style={styles.card} source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
          </View>
        </ScrollView>

        <Text style={{ fontSize: 20, color: 'gray' }}>Près de chez vous</Text>
        <ScrollView style={{width: "98%" }} horizontal={true}>
          <View style={[styles.container, {flexDirection: "row"}]} >
            <Image style={styles.card} source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: "gray"
  },
  scroll: {
    height: 30,
    width: "98%"
  },
  card: {
    width: "20%",
    height: 120,
    margin: 30
  }
});