import React, { Component } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Button } from 'native-base'
import styles from './styles'
class SocialPlatformIntegration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.integration_methods}>
                    <Button
                        style={styles.intergration_google_buttons}
                        onPress={() => {Alert.alert("Hey, We are working on it!")}}
                    >
                        <Image
                            style={{ width: 20, height: 20  , marginRight: 5, marginTop:2 }}
                            source={require('../../../assets/img/google.png')}
                        />
                        <Text style={{ color: "white" }}>Google</Text>
                    </Button>
                    <Button
                        style={styles.intergration_facebook_buttons}
                        onPress={() =>{Alert.alert("Hey, We are working on it!")}}
                    >
                        <Image
                            style={{ width: 30, height: 30}}
                            source={require('../../../assets/img/fb.png')}          
                        />  
                        <Text style={{ color: 'white' }}>Facebook</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default SocialPlatformIntegration
