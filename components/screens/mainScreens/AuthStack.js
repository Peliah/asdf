import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import Login from '../Login';
import { AuthContext } from '../../lib/AuthContext';

export default function AuthStack() {

  const Stack = createNativeStackNavigator()

  return (
    <View style={styles.container}>
        <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="login_section" options={ { headerShown: false} } component={Login} />
        </Stack.Navigator>
        </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})