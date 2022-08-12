import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'


import { AuthContext } from '../../lib/AuthContext'
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export default function Auth() {
    const [authData, setAuthData] = useContext(AuthContext)

    return (
        <View style ={styles.container}>
            { !authData ? <AppStack />   : <AuthStack /> }
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})