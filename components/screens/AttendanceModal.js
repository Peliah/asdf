import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { FontAwesome, AntDesign } from '@expo/vector-icons';


import Button from './Button'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const AttendanceModal = ({ twoDaysAgo, modalControl }) => {
    const [days, setDays] = useState([
        {
            day: "Today",
            color: '#D0D0D0'
        },
        {
            day: "Yesterday",
            color: '#D90368'
        },
        {
            day: twoDaysAgo,
            color: '#541388'
        },
    ])
    useEffect(() => {
      translateY.value = withSpring(-SCREEN_HEIGHT /3, {damping: 50})
      modalControl()
    }, [gesture])
    
    const translateY = useSharedValue(0)

    const context = useSharedValue({vertical: 0})
    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { vertical: translateY.value}
    })
    .onUpdate( event => {
        translateY.value = event.translationY + context.value.vertical
        translateY.value = Math.max(translateY.value, -300)
        if (translateY.value > -160){
            translateY.value = withSpring(SCREEN_HEIGHT, {damping: 50})
        }
    } )

    const animatedStyle = useAnimatedStyle( () => {
        return {
            transform: [{translateY: translateY.value}]
        }
    } )
    const setSelectedId = (id) => {
        console.log(id)
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
                    <FlatList
                        data={days}
                        horizontal
                        inverted
                        style={{ marginHorizontal: '10%', marginTop: 20, }}
                        keyExtractor={item => item.color}
                        renderItem={({item}) => <Button text={item.day} onPress={() => setSelectedId(item.day)} color={item.color} />}
                    />
                    <Text>som</Text>
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
        top: SCREEN_HEIGHT /1.2,
        borderRadius: 25
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
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        right: 0,
        top: -10,
        marginRight: 10,
    }
})