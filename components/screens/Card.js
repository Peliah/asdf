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
    // const leftPosition = useSharedValue(-100);
    // const context = useSharedValue({horizontal: 0})
    // const [modalState, setModalState] = useContext(AttendanceModalContext)

    // const updateShare = ()=>{
    //     setModalState((prev)=> {
    //         if(leftPosition.value > -40){
    //             return true
    //         }else{
    //             return false
    //         }
    //     })
    // }    

    // const showModal = useCallback(() => {
    //     "worklet";
    //     runOnJS(updateShare)(0)
    //   },
    //   [])

    // const gesture = Gesture.Pan()
    // .onStart(() => {
    //     context.value = { horizontal: 0}
    // })
    // .onUpdate( event => {
    //     leftPosition.value = event.translationX / 3 + context.value.horizontal
    //     leftPosition.value = Math.min(leftPosition.value, 0)
    //     showModal() 
    // })
    // .onEnd((_) => {
    //     if (leftPosition.value > -40){
    //         leftPosition.value = withSpring(0, {damping: 50})
    //     }
    //     else{
    //         leftPosition.value = withSpring(-100, {damping: 50})
    //     }
    // })
    

    
    // const animatedStyle = useAnimatedStyle(() => {
    //     "worklet";
    //     return{
    //         left: `${leftPosition.value}%`
    //     }
    // }, [])

    // const [loaded] = useFonts({
    //     Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
    //     RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    // });
    
    // if (!loaded) {
    //     return null;
    // }

    const time = new Date()
    const HMS = time.getFullYear()+ '-' + (time.getMonth() +1)+ '-' + time.getDate()+ ' '+time.getHours()+':'+time.getMinutes()

    const [timeIn, settimeIn] = useState('__:__')
    const [timeOut, settimeOut] = useState('__:__')
    const checkin =()=>{

        fetch('http://192.168.1.101:500/hr/attendance/checkin',
        {
         method:'POST',
         headers:{
           Accept: 'Application/json',
           'Content-Type': 'application/json'
         },
     
        //  body: JSON.stringify({
        //    // name:userdata.name,
        //    checkin:HMS
        //  })
       });

       settimeIn(HMS)
    }

    const checkout = ()=>{
        fetch('http://192.168.1.101:500/hr/attendance/checkout',
        {
         method:'PUT',
         headers:{
           Accept: 'Application/json',
           'Content-Type': 'application/json'
         },
     
        //  body: JSON.stringify({
        //    // name:userdata.name,
        //   //  id: '',
        //   //  checkin:HMS
        //  })
       });

       settimeOut(HMS)
    }
   
    
  return (
    <View style={[styles.card]}>
        {/* <GestureDetector gesture={gesture}> */}
            <View style={styles.cardContent}>
                {/* <Animated.View style={[ styles.shadow,animatedStyle]}>
                </Animated.View> */}
                <TouchableOpacity onPress={()=>checkin()} style={styles.clock}>
                    <View style={[styles.shadowSlider]} />
                    <Text style={styles.textTop}>Clock In</Text>
                    <Text style={styles.text}>{timeIn}</Text>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity onPress={()=>checkout()} style={styles.clock}>
                    <Text style={styles.textTop}>Clock Out</Text>
                    <Text style={styles.text}>{timeOut}</Text>
                </TouchableOpacity>
            </View>
        {/* </GestureDetector> */}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '85%',
        height: 400,
        borderRadius: 20,
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
        elevation: 10,
    },
    cardContent:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent:"center",
    },
    text: {
        fontFamily: 'RalewayBold',
        fontSize: 12,
        paddingBottom:3,
        textAlign: 'center',
        marginTop:50
    },
    shadow: {
        backgroundColor: '#387d7a11',
        width: '100%',
        height: '300%',
        position: 'absolute',
        left: '-100%'
    },
    clock:{
      paddingTop:20,
      alignContent:'center',
      width: '100%',
      height:"50%",
      borderRadius: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: '#002',
      shadowOpacity:0.1,
      shadowRadius:3,
    },

    textTop:{
      fontFamily: 'RalewayBold',
      position: 'relative',
      textAlign: 'center',
      fontSize: 40,
      height:'50%',
    },
    divider:{
      width:'90%',
      height:1,
      backgroundColor:'grey',
      alignSelf: 'center'
    }
    
})