import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import ValidateAttendance from '../ValidateAttendance';
import HomeScreen from '../HomeScreen';
import { Gesture, GestureDetector, GestureHandlerRootView, } from 'react-native-gesture-handler';
import Menu from '../Menu';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Settings from '../Settings';
import Profile from '../Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottonNav from '../BottonNav'
enableScreens();

const { width: SCREEN_WIDTH } = Dimensions.get('window')
export default function AppStack() {

  const leftPosition = useSharedValue(0);
    const context = useSharedValue({horizontal: 0})

  const Stack = createNativeStackNavigator()
  
  const gesture = Gesture.Pan()
  .onStart(() => {
    context.value = { horizontal: leftPosition.value }
  })
  .onUpdate(event => {
    leftPosition.value = event.translationX + context.value.horizontal
    leftPosition.value = Math.min(leftPosition.value, SCREEN_WIDTH)
    console.log(leftPosition)
  })
  .onEnd(() => {
    if (leftPosition.value > SCREEN_WIDTH / 2){
      leftPosition.value = withSpring(SCREEN_WIDTH, {damping: 50})
    }
    else{
      leftPosition.value = withSpring(0, {damping: 50})
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";
    return{
        transform: [{translateX: leftPosition.value}],
    }
  }, [])

  const Tab = createBottomTabNavigator();

  // TODO: add something
  return (
    <View style= {styles.container}>
      <GestureHandlerRootView style={{ flex: 1}}>
        <GestureDetector gesture={gesture}>
          <View style={{flex: 1}}>

            <Animated.View style={[styles.navigationMenu, animatedStyle]}>
              <Menu />
            </Animated.View>
            <View style={{flex: 1}}>
              <NavigationContainer>
                <Stack.Navigator>

                  <Stack.Screen name='Tab'  options={ { headerShown: false} }  component={BottonNav}/>
                  <Stack.Screen name="home"  options={ { headerShown: false} } component={HomeScreen} />
                  <Stack.Screen name="settings"  options={ { headerShown: false} } component={Settings} />

                  <Stack.Screen name="profile"  options={ { headerShown: false} } component={Profile} />
                </Stack.Navigator>
                {/* <Tab.Navigator>
                  <Tab.Screen name='home' options={{ headerShown: false }} component={HomeScreen}/>
                  <Tab.Screen name='settings' component={Settings}/>
                  <Tab.Screen name= 'profile' component={Profile}/>
                </Tab.Navigator> */}
              </NavigationContainer>
            </View>
          </View>
        </GestureDetector>
        </GestureHandlerRootView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationMenu: {
      position: 'absolute',
      width: '70%',
      height: '100%',
      top: 0,
      left: -SCREEN_WIDTH,
      zIndex: 2,
    },
  
})