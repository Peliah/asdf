import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,SafeAreaView, Text, Platform, } from 'react-native';
import Login from './components/screens/Login';
import PopupNetwork from './components/screens/PopupNetwork';
import ValidateAttendance from './components/screens/ValidateAttendance';



export default function App() {
  const [visible, setVisible] = useState(true)


  return (
    <SafeAreaView style={styles.container}>
      <Login />
      {/* <PopupNetwork visible={visible} /> */}
      {/* <ValidateAttendance /> */}
      <StatusBar style="auto" />
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
