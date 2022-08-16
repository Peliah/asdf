import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    runOnJS,
  } from 'react-native-reanimated';
import { useFonts } from 'expo-font'
import { AttendanceModalContext } from '../lib/AttendanceModalState';



export default function Card({ currentTime, handleSwipe, type}) {
    const leftPosition = useSharedValue(-100);
    const context = useSharedValue({horizontal: 0})
    const [modalState, setModalState] = useContext(AttendanceModalContext)

    const updateShare = ()=>{
        setModalState((prev)=> {
            if(leftPosition.value > -40){
                return true
            }else{
                return false
            }
        })
    }    

    const showModal = useCallback(() => {
        "worklet";
        runOnJS(updateShare)(0)
      },
      [])

    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { horizontal: 0}
    })
    .onUpdate( event => {
        leftPosition.value = event.translationX / 3 + context.value.horizontal
        leftPosition.value = Math.min(leftPosition.value, 0)
        showModal() 
    })
    .onEnd((_) => {
        if (leftPosition.value > -40){
            leftPosition.value = withSpring(0, {damping: 50})
        }
        else{
            leftPosition.value = withSpring(-100, {damping: 50})
        }
    })
    

    
    const animatedStyle = useAnimatedStyle(() => {
        "worklet";
        return{
            left: `${leftPosition.value}%`
        }
    }, [])

    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

   
    
  return (
    <View style={[styles.card]}>
        <GestureDetector gesture={gesture}>
            <View style={styles.cardContent}>
                <Animated.View style={[ styles.shadow,animatedStyle]}>
                </Animated.View>
                <View style={[styles.shadowSlider]} />
                <Text style={styles.text}>{type == 'checkin' ?' Take Attendance' : 'Checkout for today'}</Text>
                <Text style={styles.text}>current time in sconds</Text>
            </View>
        </GestureDetector>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '90%',
        height: 70,
        borderRadius: 8,
        borderLeftColor: 'red',
        borderLeftWidth: 3,
        marginBottom: 20,
        shadowRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.84,
        overflow: 'hidden',
        elevation: 1.2,
    },
    cardContent:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'RalewayBold',
        fontSize: 12,
        paddingLeft: 10,
        paddingBottom: 5
    },
    shadow: {
        backgroundColor: '#387d7a11',
        width: '100%',
        height: '300%',
        position: 'absolute',
        left: '-100%'
    },
    
    
})