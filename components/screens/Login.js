import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    
    const handleContactAdmin = () => {
        Linking.openURL('mailto:c.fomekong@wise.com?subject=Unable access my mobile account')
    }

    const submitForm = () => {
        if(!email.email || !password.password){
            setMessage('Invalid username/password field')
            setTimeout(()=>{
                setMessage('')
            }, 2000)
        }

    }
  return (
    <View style={styles.container}>
        <Image style={{width: 200, height: 200}} source={require('../assets/img/logo_jarvis.png')} />
        <View style={styles.formInputWrapper}>
            <Octicons name="person" size={20} color="#fff" />
            <TextInput
                value={email}
                onChangeText={(email) => setEmail({ email })}
                placeholder={'Email'}
                style={styles.input}
            />
        </View>
        <View style={styles.formInputWrapper}>
            <Octicons name="shield-lock" size={20} color="white" />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
        </View>
        <View style={{marginTop: -10}}>
            <Text style={styles.danger}>{message}</Text>
        </View>
        
        
        <TouchableOpacity style= {styles.login} onPress={submitForm}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.loginIssueWrapper}>
            <Text style={styles.loginIssueMainText} >Have an issue with your account?</Text>
            <TouchableOpacity onPress={handleContactAdmin}><Text style={[styles.loginIssueButton]}>Contact admin</Text></TouchableOpacity>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    formInputWrapper: {
        backgroundColor: '#fff',
        width: '90%',
        backgroundColor: '#efe8fa',
        marginBottom: 20,
        // padding: 20,
        borderRadius: 6,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    
    inputLabel: {
        
    },
    input: {
        fontFamily: 'Montserrat',
        height: '100%',
        marginLeft: 10,
        width: '90%'
    },
    


    login: {
        padding: 18,
        backgroundColor: 'rgb(41, 110, 180)',
        alignItems: 'center',
        borderRadius: 100,
        width: '90%',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Montserrat'
    },
    loginIssueWrapper: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    loginIssueMainText: {
    },
    loginIssueButton: {
        fontFamily: 'RalewayBold'
    },
    danger: {
        color: 'red'
    }
  });