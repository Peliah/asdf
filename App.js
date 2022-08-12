import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { StyleSheet,SafeAreaView, Text, Platform, } from 'react-native';
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import 'react-native-gesture-handler';


import { AuthContextProvider, AuthContext } from './components/lib/AuthContext';

import PopupNetwork from './components/screens/PopupNetwork'
import Auth from './components/screens/mainScreens/Auth';

enableScreens();

export default function App() {
  const [visible, setVisible] = useState(true)
  const [connected, setconnected] = useState(true)
  const Stack = createNativeStackNavigator()
  

  return (
    <SafeAreaView style={styles.container}>
      <AuthContextProvider>
        <NavigationContainer>
          { connected ? <Auth /> : <PopupNetwork /> }
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
