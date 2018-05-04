import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, NavFooter, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { Button } from 'native-base'
import styles from './styles'
import LoginSubSection from '@screen/Onboard/LoginSubsection'
class loginScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
        tabBarLabel: 'Login'
    }
    render() {
        return (
            <View style={styles.window}>
                <ImageBackground style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height / 3,
                    backgroundColor: "#000", position: "absolute", opacity: 0.2
                }}
                    source={{ uri: 'https://static.fabhotels.com/img/main_banner_v1.png' }}>
                </ImageBackground>
                <View style={styles.wrapper}>
                    <View style={styles.header_text}>
                        <Text style={styles.text_header}>Log In/Sign Up</Text>
                    </View>
                    <LoginSubSection />
                    <View style={styles.skip_login}>
                        <Text style={styles.skip_text}>Skip</Text>
                    </View>
                </View>

            </View>

        )
    }
}
export default loginScreen
