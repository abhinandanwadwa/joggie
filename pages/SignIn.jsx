// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Checkbox from 'expo-checkbox';
// import { account } from '../appwrite/appwriteConfig';
// import {v4 as uuidv4} from 'uuid'

// const SignIn = () => {
//     const [agree, setAgree] = useState(false)
//     const [user, SetUser] = useState({
//         email:"",
//         password:""
//     })
//     try {
//         const signInInner = async () => {
//             await account.createEmailSession(user.email, user.password)
//         }
//         signInInner();
//         //navigate to 
//     } catch (error) {
//         //error page 404
//     }

//   return (
//     <View  style={styles.mainContainer}>
//         <Text>Sign In</Text>
//         <View>
//             <Text>Email</Text>
//             <TextInput 
//             style={styles.inputStyle}
//             autoCapitalize="none"
//             autoCorrect={false}
//             />
//         </View>
//         <View>
//             <Text>Password</Text>
//             <TextInput 
//             style={styles.inputStyle}
//             autoCapitalize="none"
//             autoCorrect={false}
//             secureTextEntry={true}
//             />
//         </View>
//         <View style={styles.wrap}>
//             <Checkbox 
//             onValueChange={()=>setAgree(!agree)}
//             color={agree? "black" : undefined}
//             />
//             <Text>Remember me</Text>
//         </View>
//         <TouchableOpacity>
//             <Text>Continue</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }

// export default SignIn

// const styles = StyleSheet.create({
//     mainContainer:{
//         height: "100%",
//         paddingHorizontal: 30,
//         paddingTop: 30,
//         backgroundColor: "fff"
//     },
//     inputStyle: {
//         borderWidth: 1,
//         borderColor: "rgba(0,0,0,0.3)",
//         paddingHorizontal: 15,
//         paddingVertical: 7,
//         borderRadius: 1,
//         fontFamily: "regular",
//         fontSize: 18
//     },
//     wrap:{
//         display: "flex"
//     }
// })


import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const SignIn = ({ navigation }) => {
    const [agree, setAgree] = useState(false);
  return (
    <View style={styles.mainContainer}>
        <View style={{ flex: 0.45, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50 }}>
            <Text style={styles.singInText}>Sign In</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Email</Text>
                <TextInput placeholder='ryan35@gmail.com' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={{...styles.inputContainer, marginBottom: 15}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Password</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput placeholder='Enter your password' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}
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
                <Text style={{ marginLeft: 10, letterSpacing: 0.8 }}>Remember me</Text>
            </View>
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
            <View style={styles.signInContainer}>
                <Text style={styles.signInText1}>Don't have an account?</Text>
                <Text style={styles.signInText2} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
            </View>
        </View>
    </View>
  )
}

export default SignIn

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