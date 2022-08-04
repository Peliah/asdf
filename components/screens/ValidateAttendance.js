import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function ValidateAttendance() {

    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    const currentTime = new Date().toLocaleString()
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Welcome back</Text>
            <View style={styles.iconWrapper}>
                <Image style={{width: 100, height: 100}} source={require('../assets/img/hi.webp')} />
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.content}>{currentTime}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Montserrat',
        textAlign: 'center',
        margin: 30,
        color: 'white',
    },
    header: {
        height: '30%',
        backgroundColor: '#1C4BB0'
    },
    iconWrapper: {
        marginTop: 20,
        alignItems: 'center',
    },
    content: {
        marginTop: 30,
        textAlign: 'center',
    }

})