import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import Chart from './Chart'
import { FontAwesome, Octicons } from '@expo/vector-icons';
import Profile from './Profile';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BottonNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='home' screenOptions={{headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle:styles.tabBar
    }}>
        <Tab.Screen name='home'component={HomeScreen}
          options={{
            tabBarIcon:({focused:boolean})=>(
              <View>
                <Octicons name='home' size={20} color='black'/>
              </View>
            )
          }}
        />
          {/* <Octicons name='home' size={20} color='#fff'/>
        </Tab.Screen> */}
        <Tab.Screen name='chart' component={Chart}
          options={{
            tabBarIcon:({focused:boolean})=>(
              <View>
                <Octicons name='graph' size={20} color='black'/>
              </View>
            )
          }}
        />
        <Tab.Screen name= 'profile' component={Profile}
          options={{
            tabBarIcon:({focused:boolean})=>(
              <View>
                <Octicons name='person' size={20} color='black'/>
              </View>
            )
          }}
        />
        <Tab.Screen name='settings' component={Settings}
          options={{
            tabBarIcon:({focused:boolean})=>(
              <View>
                <Octicons name='gear' size={20} color='black'/>
              </View>
            )
          }}
        />
  </Tab.Navigator> 
  )
}
const styles =StyleSheet.create({
  tabBar:{
    position:'absolute',
    paddingBottom: 10,
    height:70,
    left:16,
    right:16,
    bottom:16,
    borderRadius:25,
    borderTopColor: 'transparent',
    shadowColor: '#001',
    shadowOffset:{
      height:6,
      width:10
    },
    shadowOpacity:0.1,
    shadowRadius:3,
    elevation:3
  }
});
export default BottonNav
