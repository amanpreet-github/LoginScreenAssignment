import React, { Component } from 'react'
import { View, Text, ImageBackground, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import { Button, Toast } from 'native-base'
import LoginSubSection from '@screen/Onboard/LoginSubsection'
class loginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    static navigationOptions = {
        header: null,
        tabBarLabel: 'Login'
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
            >
                <View style={styles.window}>
                    <ImageBackground style={styles.backgroundImage}
                        source={require('../../../assets/img/banner.png')}>
                    </ImageBackground>
                    <View style={styles.wrapper}>
                        <View style={styles.header_text}>
                            <Text style={styles.text_header}>Log In/Sign Up</Text>
                        </View>
                        <LoginSubSection />
                        <View style={styles.skip_login}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                    Alert.alert("Hey, We are working on it!");
                                }}>
                                <Text style={styles.skip_text}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>

        )
    }
}
export default loginScreen
