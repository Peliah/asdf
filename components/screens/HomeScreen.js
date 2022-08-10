import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ValidateAttendance from './ValidateAttendance'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ValidateAttendance />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})