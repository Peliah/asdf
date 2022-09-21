import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts'
import { AuthContext } from '../lib/AuthContext'


const Graph = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   const resp = await fetch("http://192.168.1.100:5000/hr/attendance/fields");
  //   const data = await resp.json();
  //   setData(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data[1])

  //   const dataa =[
  //       {
  //         value:data[4].worked_hours,
  //         label:data[4].create_date
  //       },
  //       {
  //         value:data[3].worked_hours,
  //         label:data[3].create_date
  //       },
  //       {
  //         value:data[2].worked_hours,
  //         label:data[2].create_date
  //       },
  //       {
  //         value:data[1].worked_hours,
  //         label:data[1].create_date
  //       },
  //       {
  //         value:data[0].worked_hours,
  //         label:data[0].create_date
  //       },
        
  //   ]

  const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState('')
    useEffect(() => {
      setUserdata(authData[0][0])
    }, [])

    console.log(userdata)


  return (
    <View style={styles.graph}>
      {/* <BarChart data={dataa}  */}

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
          backgroundColor='white'
        vertical />
      <Text>Graph</Text>
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

