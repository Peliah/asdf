import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';
import Swiper from 'react-native-swiper'

import { AuthContext } from '../lib/AuthContext';
import axios from 'axios';
import AttendanceModal from './AttendanceModal';
import Card from './Card';
import { AttendanceModalContext } from '../lib/AttendanceModalState';

export default function ValidateAttendance() {

    const [authData, setAuthData] = useContext(AuthContext)
    const [modalState, setModalState] = useContext(AttendanceModalContext)
    const [user, setUser] = useState('')
    useEffect(() => {
      setUser(authData[0])
      getSticker()
    }, [])
    
    const getSticker = async() => {
        try {
        const response = await fetch('http://192.168.10.195:8000/randomsticker', 
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'http',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data)
        }
        catch (err) {
        console.log(err)
        }
    }

    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const currentTime = new Date().toLocaleString()
    
    const date = ( index = 0 ) => {
        var weekday=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        const day = new Date().getDay() - index;
        if(day < 0){
            day = weekday.length() - day
        }
        console.log(weekday[day]);
        
        return weekday[day]
    }




  return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.title}>{user.name}</Text>
                <View style={styles.iconWrapper}>
                    <Image style={{width: 100, height: 100}} source={require('../assets/img/hi.webp')} />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.content}>{date()}</Text>
                <View>
                <View style={[styles.cardWrapper]} >
                    <Card currentTime={currentTime} type='checkin' />
                    <Card currentTime={currentTime}  type='checkout' />
                </View>
                </View>
            </View>
                <AttendanceModal twoDaysAgo = {date(2)} />
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
    },
    cardWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    
})