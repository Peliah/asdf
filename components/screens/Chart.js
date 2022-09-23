import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts'
import { AuthContext } from '../lib/AuthContext'
// import Graph from './Graph'

const Chart = () => {
  const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState(authData[1])
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
      let d =[]
      userdata.forEach(element => {
        d.push({
          value: element.worked_hours,
          label: element.create_date
        })
      });
      setGraphData(d)
    }, [])

   
      

  return (
    <View style={styles.container}>
      <BarChart data={graphData} 

        barBorderRadius={6}
        spacing={50}
        width={430}
        height={350}
        yAxisThickness={2}
        frontColor="#177AD5"
        labelWidth={40}
        xAxisThickness={2}
        showLine
          lineConfig={{
            color: '#F29C6E',
            thickness: 1,
            curved: true,
            hideDataPoints: false,
            shiftY: 20,
          }}
          showFractionalValue
          showYAxisIndices
          barMarginBottom={-1}
          backgroundColor='white'/>
      {/* <Graph/> */}

    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    paddingTop:20,
    flex:1,
    alignItems:'center',
  }
})
