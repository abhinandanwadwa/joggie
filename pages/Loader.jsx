import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loader = ({ navigation }) => {
    useEffect(() => {
        const checkSignIn = async () => {
            const authtoken = await AsyncStorage.getItem('auth-token');
            if (authtoken) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }
            else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'GetStarted' }],
                });
            }
        }
        checkSignIn();
    }, []);
    
  return (
    <View style={styles.mainContainer}>
      <Text>Loading...</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})