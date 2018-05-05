import React, { Component } from 'react'
import { View, Text, ImageBackground, Alert, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { Button } from 'native-base'
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
                <ImageBackground style={styles.backgroundImage}
                    source={{ uri: 'https://static.fabhotels.com/img/main_banner_v1.png' }}>
                </ImageBackground>
                <View style={styles.wrapper}>
                    <View style={styles.header_text}>
                        <Text style={styles.text_header}>Log In/Sign Up</Text>
                    </View>
                    <LoginSubSection />
                    <View style={styles.skip_login}>
                        <TouchableWithoutFeedback onPress ={() => {Alert.alert('Hey, we are working on it!')}}>
                            <Text style={styles.skip_text}>Skip</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        )
    }
}
export default loginScreen
