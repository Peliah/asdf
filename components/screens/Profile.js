import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../lib/AuthContext'
import { useFonts } from 'expo-font'


export default function Profile() {
    const [authData, setAuthData] = useContext(AuthContext)
    const [userdata, setUserdata] = useState('')
    useEffect(() => {
      setUserdata(authData[0])
    }, [])
    
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
          <View style={styles.backgrnd}>
            <Text>Profile</Text>
          </View>
          <View style={styles.imgBack}>
            <Image style={styles.profilePic} source={require('../assets/img/hi.webp')} />

            {/* <Image source={require()} style={styles.profilePic}></Image> */}
          </View>
          <View>
            <Text style={styles.username}>{userdata.name}</Text>
            <Text style={styles.email}>{userdata.email}</Text>
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
            <TouchableOpacity style={styles.content} onPress={() => {console.log("Policy")}}>
              <Text style={styles.btnText}>{userdata.function}</Text>
              <Text style={styles.label}>Function</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content} onPress={() => {console.log("Logout")}}>
              <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  backgrnd:{
    padding: 10,
    width: '100%',
    backgroundColor: '#1C4BB0',
    height: 300,
  },
  imgBack:{
    marginTop:-100,
    backgroundColor: '#9B9BB9',
    borderRadius:100,
    width:200,
    height:200,
    alignSelf:'center',
    justifyContent:'center'

  },
  profilePic:{
    width:140,
    height: 140,
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
    color: 'grey'
  },
  content:{
    alignSelf: 'center',
    width: '90%',
    paddingTop:20,
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
    
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