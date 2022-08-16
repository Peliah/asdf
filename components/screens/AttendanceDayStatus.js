import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AttendanceDayStatus({status}) {
  console.log(status);
  return (
    <View>
      <Text>You have successfull signed attendance for today</Text>
      <Text>{status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})