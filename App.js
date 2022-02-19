import React, { useState } from 'react';
import back from './assests/images/back.jpg'
import logo from './assests/images/logo.jpg'
import google from './assests/images/google.png'
import facebook from './assests/images/facebook.png'
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  const inputArr = [
    {
      title: 'UserName',
      placeholder: 'username',
      type: 'text'
    },
    {
      title: 'Password',
      placeholder: 'password',
      type: 'password'
    }
  ]
  const btnArr = [
    {
      title: 'Signi in'
    },
    {
      title: 'Dont have an account?'
    }
  ]
  return <ImageBackground resizeMode="cover" source={back} style={styles.back}>
    <SafeAreaView style={styles.mainDiv}>
      <View style={{ width: 250, height: 'auto', marginTop: 120, marginLeft: 60, }}>
        <Text style={{ color: 'white', fontSize: 32, textAlign: 'center' }}>
          Bookstore
        </Text>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.formDiv}>
        {/* input  */}
        {
          inputArr.map((e) => {
            return <>
              <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>{e.title}</Text>
              <TextInput
                // keyboardType={e.type}
                placeholder={e.placeholder}
                style={styles.input} />
            </>
          })
        }
        {/* button  */}
        {
          btnArr.map((e) => {
            return <TouchableOpacity style={{
              width: "100%", height: 50,
              backgroundColor: 'orange', margin: 10, borderRadius: 30
            }}>
              <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 20 }}>
                {e.title}
              </Text>
            </TouchableOpacity>
          })
        }
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{
            width: "100%", height: 50, width: 50,
            margin: 10, borderRadius: 50
          }}>
            <Image source={facebook} style={styles.media} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: "100%", height: 50, width: 50,
            margin: 10, borderRadius: 50
          }}>
            <Image source={google} style={styles.mediaGoogle} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </ImageBackground>
}

const styles = StyleSheet.create({
  mainDiv: {
    height: '100%',
  },
  back: {
    height: '100%',
    width: '100%',
  },
  formDiv: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 100,
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 60
  },
  formText: {
    color: 'black'
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    height: 50,
    width: '100%',
    color: 'black'
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 80
  },
  media: {
    width: 60,
    height: 60,
    backgroundColor: 'red'
  },
  mediaGoogle: {
    width: 40,
    height: 40,
    marginTop: 10
  }
});

export default App;
