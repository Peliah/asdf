import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { SimpleLineIcons, Ionicons,Octicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { openSettings } from 'expo-linking';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { AuthContext } from '../lib/AuthContext';



export default function Menu({ navigation }) {
    const Stack = createNativeStackNavigator()
    const [ authData, setAuthData ] = useContext(AuthContext)
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }
    const openSettings = () => {
        console.log('settings page');
    } 
    const logout = () => {
        setAuthData(false)
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.contentItemWrapper}>

                <TouchableOpacity onPress={openSettings} style={styles.contentItem}>
                    <Octicons name="person" size={24} color="black" />
                    <Text style={styles.text}>Contacts</Text>
                </TouchableOpacity>
                <View style={styles.bottomMenuItems}>
                    <TouchableOpacity onPress={() => navigation.navigate('settings')} style={styles.contentItem}>
                        <Ionicons name="md-settings-outline" size={24} color="black" />
                        <Text style={styles.text}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.contentItem}>
                            <SimpleLineIcons name="logout" size={24} color="black" />
                            <Text style={styles.text}>logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        paddingLeft: 15,
        paddingTop: 30,
    },
    contentItem: {
        flexDirection: 'row',
        padding: 10, 
        marginBottom: 5
    },
    text: {
        fontFamily: 'RalewayBold',
        fontSize: 14,
        paddingLeft: 15,
        paddingBottom: 5,
    },
    bottomMenuItems: {
        // height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    }

})