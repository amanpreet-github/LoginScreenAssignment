import React, { Component } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { Button } from 'native-base'
import styles from './styles'
import CountrySelector from '@screen/Onboard/CountrySelector'
import SocialPlatformIntegration from '@screen/Onboard/SocialPlatformIntegration'

class LoginSubsection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
        console.log('this---', this.props);
    }

    render() {
        return (
            <View style={styles.login_box}>
                <Text style={styles.box_text}>One tap login</Text>
                <SocialPlatformIntegration {...this.props} />
                <View style={styles.integration_choice}>
                    <Text style={styles.choice_text} >or</Text>
                </View>
                <View style={styles.input_details}>
                    <CountrySelector  />
                    <TextInput
                        style={styles.input_text}
                        placeholder={"Enter Mobile Number"}  
                        keyboardType ={"phone-pad"}
                        maxLength ={10} 
                        placeholderTextColor={'rgb(211,211,211)'}  
                        underlineColorAndroid='transparent'
                        onChangeText = {(input) => this.setState({number: input})}
                        value = {this.state.number}
                    ></TextInput>    
                </View>
                <View style={styles.continue_login}>
                    <Button
                        style={styles.continue_button}
                        warning
                        onPress={() => {Alert.alert("Hey, We are working on it!")}}
                    >
                        <Text>CONTINUE</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default LoginSubsection
