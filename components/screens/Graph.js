import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../lib/AuthContext'
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts'
import {Table, TableWrapper, Rows, Row, Cols, Col, Cell} from 'react-native-table-component'

const Graph = () => {
  const [authData, setAuthData] = useContext(AuthContext)
  const [userdata, setUserdata] = useState(authData[1])
  console.log(userdata)

  const arrr = Object.values(userdata)
  console.log(arrr)

  return (
    <View style={styles.graph}>
      
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({
  graph:{
    marginTop:30,
    width:'98%',
    height:'50%'
  },
})

