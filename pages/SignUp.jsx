// import { View, Text } from 'react-native'
// import React, { useState } from 'react'

// const SignUp = () => {
//     const [agree, setAgree] = useState(false)
//     const [user,setUser] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const SignUpUser = async (e)=>{
//         e.preventDefault()

//         const promise = account.create(
//             uuidv4(),
//             user.name,
//             user.email,
//             user.password
//         );
//         promise.then(
//             function(response){
//                 //navigate to main page
//             },
//             function(error){
//                 //failure
//             }
//         )        
//     }

//   return (
//     <View style={styles.mainContainer}>
//       <Text>SignUp</Text>
//       <View>
//             <Text>Full Name</Text>
//             <TextInput 
//             onChange={(e)=>{
//                 setUser({
//                     ...user,
//                     name: e.target.value
//                 })
//             }}
//             style={styles.inputStyle}
//             autoCapitalize="none"
//             autoCorrect={false}
//             />
//         </View>
//         <View>
//             <Text>Email</Text>
//             <TextInput 
//             style={styles.inputStyle}
//             autoCapitalize="none"
//             autoCorrect={false}
//             onChange={(e)=>{
//                 setUser({
//                     ...user,
//                     email: e.target.value
//                 })
//             }}
//             />
//         </View>
//         <View>
//             <Text>Password</Text>
//             <TextInput 
//             style={styles.inputStyle}
//             autoCapitalize="none"
//             autoCorrect={false}
//             secureTextEntry={true}
//             onChange={(e)=>{
//                 setUser({
//                     ...user,
//                     password: e.target.value
//                 })
//             }}
//             />
//         </View>
//         <View>
//             <Text>Confirm Password</Text>
//             <TextInput 
//             style={styles.inputStyle}
//             autoCapitalize="none"
//             autoCorrect={false}
//             secureTextEntry={true}
//             />
//         </View>
//         <View style={styles.wrap}>
//             <Checkbox 
//             value={agree} 
//             onValueChange={()=>setAgree(!agree)}
//             color={agree? "black" : undefined} 
//             />
//             <Text>I agree to the terms and conditions</Text>
//         </View>
//         <TouchableOpacity
//         //change bg color with "agree" state
//             onClick={SignUpUser}
//         >
//             <Text>Sign up</Text>
//         </TouchableOpacity>
//         <Text>I agree to the terms and conditions</Text>
//         <TouchableOpacity>
//             <Text> Sign in</Text>
//         </TouchableOpacity>
//     </View>
//   )
// }

// export default SignUp

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

const SignUp = ({ navigation }) => {
    const [agree, setAgree] = useState(false);
  return (
    <View style={styles.mainContainer}>
        <View style={{ flex: 0.25, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50 }}>
            <Text style={styles.singInText}>Sign Up</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Full Name</Text>
                <TextInput placeholder='John Smith' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Email</Text>
                <TextInput placeholder='ryan35@gmail.com' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={{...styles.inputContainer, marginBottom: 30}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Password</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput placeholder='Enter your password' style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}
                    />
                    <Image style={{ top: '30%', position: 'absolute', right: 20 }} source={require('../assets/eye-off.png')} />
                </View>
            </View>
            <View style={{...styles.inputContainer, marginBottom: 15}}>
                <Text style={{ marginBottom: 8, letterSpacing: 0.8 }}>Confirm Password</Text>
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
                <Text style={{ marginLeft: 10, letterSpacing: 0.8 }}>I agree to the terms and conditions</Text>
            </View>
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue</Text>
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