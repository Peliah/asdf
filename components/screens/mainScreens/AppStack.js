import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import ValidateAttendance from '../ValidateAttendance';
import HomeScreen from '../HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


enableScreens();

export default function AppStack() {

  const Stack = createNativeStackNavigator()
  return (
    <View style= {styles.container}>
        <GestureHandlerRootView style={{ flex: 1}}>
          <Stack.Navigator>
            <Stack.Screen name="home"  options={ { headerShown: false} } component={HomeScreen} />
          </Stack.Navigator>
        </GestureHandlerRootView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})