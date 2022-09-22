import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../lib/AuthContext'
import { useFonts } from 'expo-font'


export default function Profile() {
    const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState('')
    useEffect(() => {
      setUserdata(authData[0][0])
    }, [])
    const logout = () => {
        setAuthData(false)
    }
    console.log(userdata);

    const hi = () => {
      console.log("hi")
  }
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/static/Montserrat-Bold.ttf'),
    RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
});

if (!loaded) {
    return null;
} 
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Text style={styles.setting}>Settings</Text>

          <View style={styles.cred}>
            <View style={styles.imgBack}>
                <Image style={styles.profilePic} source={{uri: 'data:image/png;base64,'+userdata.image}}/>
            </View>
            <View>
                <Text style={styles.username}>{userdata.name}</Text>
                <Text style={styles.email}>{userdata.email}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity style= {styles.content} onPress={() => {hi()}}>
              <Text style={styles.btnText}>{userdata.name}</Text>
              <Text style={styles.label}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content} onPress={() => {console.log(userdata.phone)}}>
              <Text style={styles.btnText}>{userdata.phone}</Text>
              <Text style={styles.label}>Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content} onPress={() => {logout()}}>
              <Text style={styles.label}>Logout</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  setting:{
    margin:'10%',
    fontSize:50,
    fontWeight: 'bold',
    fontFamily:'RalewayBold',
    padding: 10,
    alignSelf:'center'
  },
  cred:{
    height:50,
    margin:40,
    flexDirection:'row'
  },
  imgBack:{
    marginEnd:20,
    width:80,
    height:80,
    backgroundColor: '#9B9BB9',
    borderRadius:100,
    alignSelf:'flex-start',
    justifyContent:'flex-start',

  },
  profilePic:{
    width:80,
    height:80,
    borderRadius:100,
    alignSelf:'center',
  },
  username:{
    fontSize:25,
    fontWeight: 'bold',
    fontFamily:'RalewayBold',
    padding: 10
  },
  email:{
    fontSize:15,
    fontWeight: 'bold',
    fontFamily:'RalewayBold',
    color: 'grey',
    paddingLeft:10
  },
  content:{
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    alignSelf: 'center',
    width: '90%',
    marginVertical: 10,
    elevation: 20,
    shadowColor: '#52006A'
    
  },
  btnText:{
    paddingBottom:25,
    paddingTop:8,
    paddingEnd:2,
    fontSize:20,
    fontFamily:'RalewayBold'
  },
  label:{
    color:'grey'
  },
  container:{
    paddingTop:20
  }

})