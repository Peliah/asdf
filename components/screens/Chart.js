import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from './Graph'

const Chart = () => {
  return (
    <View style={styles.container}>
      <Text>Chart</Text>
      <Graph/>

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
