import { useState } from 'react'
import { View, Text, Image, Modal,StyleSheet, TouchableOpacity, BackHandler, Linking, NativeModules, Platform } from 'react-native'
import * as Network from 'expo-network';
import { useFonts } from 'expo-font';
import WifiManager from "react-native-wifi-reborn";




export default function PopupNetwork({ visible }) {
    const { RNAndroidOpenSettings } = NativeModules;
    const [showModal, setShowModal] = useState(visible)
    openAppSettings = () => {
        if (Platform.OS === 'ios') {
          Linking.openURL("app-settings:");
        } else {
            RNAndroidOpenSettings.generalSettings();
        }
    }
   
    
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
        Raleway: require('../assets/fonts/Raleway.ttf'),
    });
    if (!loaded) {
        return null;
      }
    
    const checkConnected = async() => {
        const n = await Network.getIpAddressAsync()
        console.log(n)
    }
    // checkConnected();
    // console.log(WifiManager.connectionStatus())


    
  return (
    <Modal transparent visible={showModal}>
        <View  style={styles.container} >
            <View style={styles.modalContainer}>
                <View>
                    <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={require("../assets/img/Rocket.png")} />
                    </View>
                    <Text style={styles.title}>Grant Access</Text>
                </View>
                <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>Wise needs network permissions to help you connect to the system. Connnect to wise wifi to be able access features with mobile </Text>
                </View>
                <View style = {styles.buttonWrapper}>
                    <TouchableOpacity style={[styles.button, styles.connect]}
                        onPress={openAppSettings}>
                        <Text style={[styles.buttonText, {color: 'white',}]}>connect</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPress={() =>  BackHandler.exitApp()  }
                     style={[styles.button, styles.exit]}>
                        <Text style={styles.buttonText}>Not now</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',

    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 0,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Roboto',
        marginBottom: 20,
        marginTop: 60,
        fontFamily: 'RalewayBold',
    },
    mainTextContainer: {
        alignItems: 'center'
    },
    mainText: {
        fontSize: 16,
        width: '90%',
        textAlign: 'center',
        lineHeight: 20
    },
    imageWrapper: {
        position: 'absolute',
        alignItems: 'center',
        top: '-50%',
        width: '100%'
    },
    image: {
        width: 110, 
        height: 110,
        transform: [
            {scaleX: -1}
        ]
    },
    buttonWrapper: {
        width: '100%',
        // paddingHorizontal: 20,
        paddingTop: 20,
    },
    button: {
        padding: 10,
        backgroundColor: 'rgb(41, 110, 180)',
        width: '100%',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 10,
    },
    connect: {
        paddingVertical: 15,
    },
    exit: {
        backgroundColor: 'transparent',
        width: 'auto'
    },
    buttonText: {
        color: 'rgb(89, 152, 197)',
        fontFamily: 'Montserrat',
        fontSize: 18
    }
})