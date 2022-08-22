import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../lib/AuthContext'

export default function Profile() {
    const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState('')
    useEffect(() => {
      setUserdata(authData[0])
    }, [])
    
    console.log(userdata);
  return (
    <View>
      <Text>Profile</Text>
      <Text>{userdata.name}</Text>
      <Text>{userdata.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})