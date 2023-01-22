import { View, Text } from 'react-native'
import React, { useState } from 'react'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [user,setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const SignUpUser = async (e)=>{
        e.preventDefault()

        const promise = account.create(
            uuidv4(),
            user.name,
            user.email,
            user.password
        );
        promise.then(
            function(response){
                //navigate to main page
            },
            function(error){
                //failure
            }
        )        
    }


  return (
    <View>
      <Text>SignUp</Text>
      <View>
            <Text>Full Name</Text>
            <TextInput 
            onChange={(e)=>{
                setUser({
                    ...user,
                    name: e.target.value
                })
            }}
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
        <View>
            <Text>Email</Text>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChange={(e)=>{
                setUser({
                    ...user,
                    email: e.target.value
                })
            }}
            />
        </View>
        <View>
            <Text>Password</Text>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            onChange={(e)=>{
                setUser({
                    ...user,
                    password: e.target.value
                })
            }}
            />
        </View>
        <View>
            <Text>Confirm Password</Text>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            />
        </View>
        <View style={styles.wrap}>
            <Checkbox 
            value={agree} 
            onValueChange={()=>setAgree(!agree)}
            color={agree? "black" : undefined} 
            />
            <Text>I agree to the terms and conditions</Text>
        </View>
        <TouchableOpacity
        //change bg color with "agree" state
            onClick={SignUpUser}
        >
            <Text>Sign up</Text>
        </TouchableOpacity>
        <Text>I agree to the terms and conditions</Text>
        <TouchableOpacity>
            <Text> Sign in</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUp