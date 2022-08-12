import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function Button({ text, color, onPress }) {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });
    if (!loaded) {
        return null;
    }
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[ styles.button, {backgroundColor: color}]}>
        <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        alignItems: 'center',
        borderRadius: 100,
        width: 90,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'RalewayBold'
    }
})