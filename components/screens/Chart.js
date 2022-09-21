import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../lib/AuthContext'
// import Graph from './Graph'

const Chart = () => {
  const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState('')
    useEffect(() => {
      setUserdata(authData[0])
    }, [])

    console.log(userdata)


  return (
    <View style={styles.container}>
      <Text>Chart</Text>
      {/* <Graph/> */}

    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})
