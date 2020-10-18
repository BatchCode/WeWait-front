import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button, Card } from 'react-bootstrap';
import { Event } from '../services/EventAPI';

export default function Home() {

  const [category, onChangeCategory] = React.useState('CONCERT');
  const [errMsg, setErrMsg] = React.useState();

  const Event = () => {
    // Reset (in case of previous Login attempt)
    setErrMsg(null)
    
    Event(category)
         .then(res => {
            setErrMsg("Token : \nBEARER " + res.token)
         })
        .catch(err => setErrMsg(err.toString()))
  }

  return (

    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop:'2%' }}>
        <Button title="All"> All </Button>
        <Button title="Event"> Event </Button>
        <Button title="Concert"> Concert </Button>
      </View>

      <Text style={{ fontSize: 20, color: 'gray', marginTop: 50, marginBottom: 10}}>Populaire en ce moment</Text>
      <ScrollView style={{ width: "97%" }} horizontal={true}>
        <Card style={{ height: '45%', marginRight: "2%"}}>
          <Card.Img variant="top" source={require('')} style={{ height:'30%'}} />
          <Card.Body>
            <Card.Title>Event'Expo</Card.Title>
               <Card.Text>
                  Evenement pour les nouveautés d'Expo
                </Card.Text>
            <Button variant="primary">Réserver ma place</Button>
          </Card.Body>
        </Card>

        <Card style={{ height: '45%', marginRight: "2%"}}>
          <Card.Img variant="top" source={require('')} style={{ height:'30%'}} />
          <Card.Body>
            <Card.Title>Event'Expo</Card.Title>
               <Card.Text>
                  Evenement pour les nouveautés d'Expo
                </Card.Text>
            <Button variant="primary">Réserver ma place</Button>
          </Card.Body>
        </Card>
      </ScrollView>

      <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10}}>Près de chez vous</Text>
      <ScrollView style={{ width: "97%" }} horizontal={true}>
      <Card style={{ height: '45%', marginRight: "2%"}}>
          <Card.Img variant="top" source={require('')} style={{ height:'30%'}} />
          <Card.Body>
            <Card.Title>Event'Expo</Card.Title>
               <Card.Text>
                  Evenement pour les nouveautés d'Expo
                </Card.Text>
            <Button variant="primary">Réserver ma place</Button>
          </Card.Body>
        </Card>
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
});