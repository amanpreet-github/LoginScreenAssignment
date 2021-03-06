import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
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
            <View style={styles.window}>
                <ImageBackground style={styles.backgroundImage}
                    source={require('../../../assets/img/banner.png')}>
                </ImageBackground>
                <KeyboardAvoidingView
                    behavior="position"
                    enabled
                >
                    <View style={styles.wrapper}>
                        <View style={styles.header_text}>
                            <Text style={styles.text_header}>Log In/Sign Up</Text>
                        </View>
                        <LoginSubSection />
                        <View style={styles.skip_login}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                    Toast.show({
                                        text: "Hey We are working on it!",
                                        buttonText: "Okey."
                                    })
                                }}>
                                <Text style={styles.skip_text}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>


        )
    }
}
export default loginScreen
