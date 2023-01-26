import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetStarted = ({ navigation }) => {
  const [authtoken, setAuthtoken] = useState(0);

  useEffect(() => {
    const checkSignIn = async () => {
      const authtoken = await AsyncStorage.getItem('auth-token');
      if (authtoken) {
          navigation.navigate('Home');
          setAuthtoken(1);
      }
    }
  checkSignIn();
  }, []);
  

  const goToRegister = () => {
    navigation.navigate('SignUp');
  }

  return (
      <View style={styles.container}>
        <View style={styles.topPart}>
          <Image source={require('../assets/homeImage.png')} style={styles.image} />
        </View>
        <View style={styles.bottomPart}>
          <Text style={styles.headingP1}>Welcome to <Text style={styles.highlightedJoggie}>Joggie</Text>!</Text>
          <Text style={styles.headingP2}>Let's make sport more fun!</Text>

          <View style={styles.smallTextContainer}>
            <Text style={styles.smallText}>This app will help increase your sport potential and</Text>
            <Text style={styles.smallText}>find friends among like-minded people.</Text>
          </View>
          <Pressable onPress={goToRegister} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <View style={styles.signInContainer}>
            <Text style={styles.signInText1}>Already have an account?</Text>
            <Text style={styles.signInText2}>Sign in</Text>
          </View>
        </View>
      </View>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BCCBDF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingP1: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headingP2: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  highlightedJoggie: {
    color: '#5219DF',
    fontWeight: 'bold',
  },
  bottomPart: {
    flex: 1,
    alignItems: 'center',
  },
  topPart: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 450,
    height: 450,
    marginTop: 50
  },
  smallTextContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  smallText: {
    fontSize: 11,
    letterSpacing: 1,
    color: '#62748C'
  },
  buttonContainer: {
    backgroundColor: '#5219DF',
    width: 350,
    marginTop: 50,
    borderRadius: 6
  },
  buttonText: {
    textAlign: 'center',
    padding: 18,
    color: 'white',
    letterSpacing: 0.8,
    fontSize: 16
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  signInText1: {

  },
  signInText2: {
    marginLeft: 6,
    fontWeight: 'bold'
  },
});