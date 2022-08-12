import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';
import Swiper from 'react-native-swiper'

import { AuthContext } from '../lib/AuthContext';
import axios from 'axios';
import AttendanceModal from './AttendanceModal';
import Card from './Card';

export default function ValidateAttendance() {

    const [authData, setAuthData] = useContext(AuthContext)
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
    const day = new Date().getDay() - 1;

    const showModal = () => {
        console.log('showing modal')
    }

    const modalControl = () => {
        showModal()
    }

    var weekday=new Array(7);
        weekday[0]="Monday";
        weekday[1]="Tuesday";
        weekday[2]="Wednesday";
        weekday[3]="Thursday";
        weekday[4]="Friday";
        weekday[5]="Saturday";
        weekday[6]="Sunday";
    
    const swipe = () => {
        console.log('swipping')
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Welcome back</Text>
            {/* <Text style={styles.title}>{user.name}</Text> */}
            <View style={styles.iconWrapper}>
                <Image style={{width: 100, height: 100}} source={require('../assets/img/hi.webp')} />
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.content}>{weekday[day]}</Text>
            <View>
                <TouchableOpacity onPress={showModal}>
                    <Text>registration complete</Text>
                </TouchableOpacity>
                
                <Card currentTime={currentTime} handleSwipe={swipe} />
                <Card currentTime={currentTime} handleSwipe={swipe} />
            </View>
        </View>
        <AttendanceModal  modalControl = {modalControl} twoDaysAgo = {weekday[day - 2]} />
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
    card: {
        backgroundColor: 'white',
        width: '90%',
        padding: 10,
        shadowRadius: 30,
        borderRadius: 8,
        borderLeftColor: 'red',
        borderLeftWidth: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.84,
        elevation: 1.2,
    },
    text: {
        fontFamily: 'RalewayBold',
        fontSize: 12,
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '40%',
        height: '160%',
        borderRadius: 8,
        transform: [
            {translateY: -10},
            {translateX: -13}
        ]
    },
    shadowSlider: {
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        flex: 1
    }
    
})