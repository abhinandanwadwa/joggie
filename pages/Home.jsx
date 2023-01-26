import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    useEffect(() => {
        const checkSignIn = async () => {
            const authtoken = await AsyncStorage.getItem('auth-token');
            if (!authtoken) {
                navigation.navigate('SignIn');
            }
        }
        checkSignIn();
    }, []);
    
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})