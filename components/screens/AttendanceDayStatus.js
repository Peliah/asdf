import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AttendanceDayStatus({status}) {

  // fetch('http://192.168.1.102:5000/hr/attendance/checkin',
  //  {
  //   method:'POST',
  //   headers:{
  //     Accept: 'Applucation/json',
  //     'Content-Type': 'application/json'
  //   },

  //   body: JSON.stringify({
  //     checkin: status
  //   })
  // });

  
  console.log(status);
  return (
    <View>
      <Text>You have successfull signed attendance for today</Text>
      <Text>{status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  

})