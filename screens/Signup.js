import React, { useState } from 'react';
import back from '../assests/images/back.jpg'
import logo from '../assests/images/logo.jpg'
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
        },
        {
            title: 'Password',
            placeholder: 'password',
            type: true
        }
    ]
    const btnArr = [
        {
            title: 'Signi in'
        },
        {
            title: 'Sign up'
        }
    ]
    return <ImageBackground resizeMode="cover" source={back} style={styles.back}>
        <SafeAreaView style={styles.mainDiv}>
            <View style={{
                width: '100%', height: '40%', justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white', fontSize: 32,
                    fontWeight: 'bold', textAlign: 'center'
                }}>
                    Todo App
                </Text>
                <Image source={logo} style={styles.image} />
            </View>
            <View style={styles.formDiv}>
                {/* input  */}
                {/* {
          inputArr.map((e,i) => {
            return <>
              <Text key={i} 
              style={{ color: 'black', fontWeight: 'bold', 
              marginTop: 10 }}>{e.title}</Text>
              <TextInput
                // keyboardType={e.type}
                placeholder={e.placeholder}
                style={styles.input} />
            </>
          })
        } */}
        <View style={{width: '90%'}}>
                <Text style={{
                    color: 'black', fontWeight: 'bold',
                    marginTop: 10
                }}>
                    Email
                </Text>
                <TextInput
                    keyboardType='email-address'
                    placeholder='Enter Email'
                    style={styles.input} />
        </View>
        <View style={{width: '90%'}}>
                <Text style={{
                    color: 'black', fontWeight: 'bold',
                    marginTop: 10
                }}>
                    Password
                </Text>
                <TextInput

                    keyboardType='default'
                    secureTextEntry={true}
                    placeholder='Enter Email'
                    style={styles.input} />
        </View>
                {/* button  */}
                {
                    btnArr.map((e, i) => {
                        return <TouchableOpacity style={{
                            width: "100%", height: 50, backgroundColor: 'orange',
                            margin: 10, borderRadius: 30
                        }} key={i}>
                            <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 20 }}>
                                {e.title}
                            </Text>
                        </TouchableOpacity>
                    })
                }
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
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: '20%',
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
        height: 50,
        width: '100%',
        color: 'black'
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 'auto',
    },
});

export default App;
