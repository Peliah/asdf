import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font'


export default function Settings() {
    
    const profileSetting = () => {

    }

    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.profilepic}>
            <Image style={{width: 100, height: 100}} source={require('../assets/img/hi.webp')} />
        </View>
        <View style={styles.settingContent}>
            <View style={styles.header}>
                <Text style={styles.text}>kimbidarl@gail.com</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Notification</Text>
                <Text>type</Text>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.text}>Notification</Text>
            </View>
            <TouchableOpacity onPress={profileSetting}>
                <View style={styles.content}>
                    <Text style={styles.text}>Profile</Text>
                </View>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profilepic: {
        width: 150,
        height: 150,
        backgroundColor:'blue',
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent:'center',
        alignItems: 'center',
    },
    settingContent: {
        padding: 20
    },
    text: {
        fontFamily: 'RalewayBold'
    },
    content: {
        padding: 20,
        borderColor: '#ccc',
        borderBottomWidth: 0.5,
    }

})