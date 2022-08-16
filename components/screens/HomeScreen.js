import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ValidateAttendance from './ValidateAttendance'
import { AttendanceModalProvider } from '../lib/AttendanceModalState'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AttendanceModalProvider>
        <ValidateAttendance />
      </AttendanceModalProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
})