import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Checkbox from 'expo-checkbox'
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const checkAuth = async () => {
            const authtoken = await AsyncStorage.getItem('auth-token');
            if (authtoken) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }
        }
        checkAuth();
    }, []);
    

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            showMessage({
                message: "Password and Confirm Password should match",
                type: 'error',
                duration: 3000,
            });
        }
        else {
            const response = await fetch('https://joggie-backend.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            try {
                await AsyncStorage.setItem('auth-token', json.authtoken);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            } catch (error) {
                console.log(error);
                if (json.error) {
                    showMessage({
                        message: json.error,
                        type: 'danger',
                        titleStyle: { fontSize: 18 },
                        style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
                    });
                }
                else if (json.errors) {
                    showMessage({
                        message: json.errors[0].msg,
                        type: 'danger',
                        titleStyle: { fontSize: 18 },
                        style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
                    });
                }
                else {
                    console.log(json);
                    showMessage({
                        message: "Internal Server Error",
                        type: 'danger',
                        titleStyle: { fontSize: 18 },
                        style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
                    });
                }
            }
        }
    }
  return (
    <View style={styles.mainContainer}>
        <View style={{ flex: 0.25, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50 }}>
            <Text style={styles.singInText}>Sign Up</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Full Name</Text>
                <TextInput value={name} onChangeText={(text) => setName(text)} placeholder='John Smith' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Email</Text>
                <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='ryan35@gmail.com' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Password</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder='Enter your password' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}
                    />
                    <Image style={{ top: '30%', position: 'absolute', right: 20 }} source={require('../assets/eye-off.png')} />
                </View>
            </View>
            <View style={{...styles.inputContainer, marginBottom: 15}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Confirm Password</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} placeholder='Enter your password' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}
                    />
                    <Image style={{ top: '30%', position: 'absolute', right: 20 }} source={require('../assets/eye-off.png')} />
                </View>
            </View>
            <View style={styles.wrap}>
                <Checkbox
                onValueChange={()=>setAgree(!agree)}
                // color={agree? "black" : undefined}
                color='rgba(0,0,0,0.4)'
                style={{ borderWidth: 0.9 }}
                value={false}
                />
                <Text style={{ marginLeft: 10, letterSpacing: 0.8 }}>I agree to the terms and conditions</Text>
            </View>
            <Pressable onPress={handleSignUp} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
            <View style={styles.signInContainer}>
                <Text style={styles.signInText1}>Already have an account?</Text>
                <Text style={styles.signInText2} onPress={() => navigation.navigate('SignIn')}>Sign in</Text>
            </View>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#BCCBDF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.4)",
        borderRadius: 6,
        paddingHorizontal: 18,
        paddingVertical: 12,
        fontSize: 16
    },
    wrap:{
        width: '90%',
        flexDirection: 'row'
    },
    inputContainer: {
        width: '90%',
    },
    singInText: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    buttonContainer: {
        backgroundColor: '#5219DF',
        width: '90%',
        marginTop: 45,
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
        marginTop: 15,
        alignItems: 'center'
    },
    signInText1: {

    },
    signInText2: {
    marginLeft: 6,
    fontWeight: 'bold'
    },
})