import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { FontAwesome, AntDesign } from '@expo/vector-icons';


import Button from './Button'
import AttendanceDayStatus from './AttendanceDayStatus';
import { AttendanceModalContext } from '../lib/AttendanceModalState';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const AttendanceModal = ({ twoDaysAgo }) => {
    
    const [modalState, setModalState] = useContext(AttendanceModalContext)
    const [date, setDate] = useState(null)

    const [days, setDays] = useState([
        {
            id: 1,
            day: "Today",
            color: '#D0D0D0'
        },
        {
            id: 2,
            day: "Yesterday",
            color: '#D90368'
        },
        {
            id: 3,
            day: twoDaysAgo,
            color: '#541388'
        },
    ])
    

    
    const translateY = useSharedValue(0)

    const context = useSharedValue({vertical: 0})
    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { vertical: translateY.value}
    })
    .onUpdate( event => {
        translateY.value = event.translationY + context.value.vertical
        translateY.value = Math.max(translateY.value, -400)
        if (translateY.value > -160){
            translateY.value = withSpring(SCREEN_HEIGHT, {damping: 50})
        }
    } )

    const animatedStyle = useAnimatedStyle( () => {
        return {
            transform: [{translateY: translateY.value}]
        }
    })

    useEffect(() => {
        if(modalState){
            translateY.value = withSpring(-SCREEN_HEIGHT / 3, {damping: 50})
        }else{
            translateY.value = withSpring(SCREEN_HEIGHT, {damping: 50})
        }
        
    }, [modalState])

    const getDayData = (id) => {
        let today = new Date()
        let day = today.getFullYear()+ '-' + (today.getMonth() +1)+ '-' + (today.getDate()+ ' '+ today.getHours() + ':' +today.getMinutes()+':'+ today.getSeconds())//new Date().toDateString()
        if(id === 1){
            day = today.getFullYear()+ '-' + (today.getMonth() +1)+ '-' + (today.getDate()+ ' '+ today.getHours() + ':' +today.getMinutes()+':'+ today.getSeconds())//Date.now().toString//new Date().toDateString()
        }
        if(id === 2){
            day = 'helo'
        }
        if(id === 3){
            day = 'two days ago'
        }
        return day
    }
    
    const dayStatus = () => {
        const status = getDayData()
        return status
    }
    
    const closeModal = () => {
        translateY.value = withSpring(SCREEN_HEIGHT, {damping: 50})
    }

  return (
    <GestureDetector gesture={gesture}>
        <Animated.View  style= {[styles.container, animatedStyle]}>
                <View style={styles.line} />
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <TouchableOpacity onPress={closeModal} style={styles.btnClose}>
                        <AntDesign name="close" size={15} color="black" />
                    </TouchableOpacity>
                    <View>
                        <FlatList
                            data={days}
                            horizontal
                            inverted
                            style={{ marginHorizontal: '10%', marginTop: 20, }}
                            keyExtractor={item => item.color}
                            renderItem={({item}) => <Button text={item.day} onPress={() => getDayData(item.id)} color={item.color} />}
                        />
                    </View>
                    <AttendanceDayStatus status={getDayData()} />
                </View>
        </Animated.View>
    </GestureDetector>
  )
}

export default AttendanceModal
const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
    },
    line: {
        width: 80,
        height: 4,
        backgroundColor: '#D0D0D0',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 4,
    },
    dayBtn: {
        color: 'blue'
    },
    btnClose: {
        width: 30,
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        right: 0,
        top: -10,
        marginRight: 10,
    }
})