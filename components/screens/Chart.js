import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts'
import { AuthContext } from '../lib/AuthContext'
import {Table, TableWrapper, Rows, Row, Cols, Col, Cell} from 'react-native-table-component'
// import Graph from './Graph'

const Chart = (e) => {
  e.preventDefault;
  const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState(authData[1])
    const [graphData, setGraphData] = useState([])
    const [timeData, setTimeData] = useState([])
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

    const timer = userdata.map(Object.values)
    console.log()
    
    const tableData ={
      tableHead: ["ID", 'Check In', 'Check Out', 'Worked hours', 'Created time'],
      tableData: timer
    }
    const [data, setData] = useState(tableData);
  return (
    <View style={styles.container}>
      <View>
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
      <ScrollView style={styles.tabdata}>
        <Table borderStyle={{ borderWidth: 2, borderColor: 'teal' }}>
          <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
          <Rows data={data.tableData} textStyle={styles.text}/>
        </Table>
      </ScrollView>
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    paddingTop:20,
    height:'100%'
  },
  text: { 
    margin: 6, 
    fontSize: 16,  
    textAlign: 'center' 
  },
  tabdata:{
    marginTop:10,
    paddingTop:20
  },
  head: { 
    height: 44, 
    backgroundColor: 'darkblue' 
  },
  headText: { 
    fontSize: 20, 
    fontWeight: 'bold' , 
    textAlign: 'center', 
    color: 'white' 
  },
})
