import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
  } from 'react-native-reanimated';
import { useFonts } from 'expo-font'



export default function Card({ currentTime, handleSwipe}) {
    const translateX = useSharedValue(0);

    const context = useSharedValue({horizontal: 0})
    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { horizontal: translateX.value}
    })
    .onUpdate( event => {
        translateX.value = event.translationX + context.value.horizontal
        console.log(translateX.value)
    })
    
    useEffect(() => {
        translateX.value = withSpring(0, {damping: 100})
      }, [gesture])


    
    const animatedStyle = useAnimatedStyle(() => {
        return{
            transform: [{translateX: translateX.value}, {translateY: -10}]
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
    <View style={[styles.cardWrapper]} >
        <View style={styles.card}>
        <GestureDetector gesture={gesture}>
            <View>
                <Animated.View style={[ styles.shadow,animatedStyle]}>
                </Animated.View>
                <View style={[styles.shadowSlider]} />
                    <Text style={styles.text}>Take Attendance</Text>
                    {/* <Text style={styles.text}>{`${hours}:${minute}:${seconds}`}</Text> */}
                    <Text style={styles.text}>current time in sconds</Text>
                </View>
        </GestureDetector>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        // flex: 1,
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
        overflow: 'hidden',
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
        width: '106%',
        backgroundColor: '#59cd9022',
        height: '160%',
        borderRadius: 8,
        transform: [
            {translateY: -200},
            {translateX: -13}
        ]
    },
    shadowSlider: {
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        flex: 1
    }
    
})