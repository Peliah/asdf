import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import ValidateAttendance from '../ValidateAttendance';
import HomeScreen from '../HomeScreen';


enableScreens();

export default function AppStack() {

  const Stack = createNativeStackNavigator()
  return (
    <View style= {styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="home"  options={ { headerShown: false} } component={HomeScreen} />
        </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})