import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button ,Toast} from 'native-base'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
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
                        onPress={() => {
                            Toast.show({
                                text: "Hey We are working on it!",
                                buttonText: "Okey."
                            })
                        }}
                    >
                        <Image
                            style={styles.intergration_google_logo}
                            source={require('../../../assets/img/google.png')}
                        />
                        <Text style={{ color: 'white', fontWeight: "bold", fontSize: 13, marginLeft : "4%" }}>Google</Text>
                    </Button>
                    <Button
                        style={styles.intergration_facebook_buttons}
                        onPress={() => {
                            Toast.show({
                                text: "Hey We are working on it!",
                                buttonText: "Okey."
                            })
                        }}
                    >
                        <FontAwesome name="facebook-square" size={22} style={{ color: "white", marginLeft: "20%" }} />
                        <Text style={{ color: 'white', fontWeight: "bold", fontSize: 13, paddingLeft: 10 }}>Facebook</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default SocialPlatformIntegration
