import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import { account } from '../appwrite/appwriteConfig';
import {v4 as uuidv4} from 'uuid'

const SignIn = () => {
    

  return (
    <View  style={styles.mainContainer}>
        <Text>Sign In</Text>
        <View>
            <Text>Email</Text>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
        <View>
            <Text>Password</Text>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            />
        </View>
        <View style={styles.wrap}>
            <Checkbox 
            // value={ } 
            // onValueChange={()=>} 
            />
            <Text>Remember me</Text>
        </View>
        <TouchableOpacity>
            <Text>Continue</Text>
        </TouchableOpacity>
    </View>
  );
}

export default SignIn

const styles = StyleSheet.create({
    mainContainer:{
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "fff"
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: "regular",
        fontSize: 18
    },
    wrap:{
        display: "flex"
    }
})