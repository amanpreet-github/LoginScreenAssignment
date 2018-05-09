import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const styles = StyleSheet.create({

    integration_methods: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    intergration_google_buttons: {
        justifyContent: 'flex-start',
        marginTop: "5%",
        marginLeft:"2%",
        backgroundColor: 'rgb(219, 50, 54)',
        height: 40,
        width: 145,
        elevation: 0,
    },
    intergration_google_logo: {
        width: 20,
        height: 20,
        marginRight: 5,
        marginLeft: "20%",
        marginTop: 2
    },
    intergration_facebook_logo: {
        width: 30,
        height: 30,
        marginLeft: "20%"
    },
    intergration_facebook_buttons: {
        justifyContent: 'flex-start',
        marginTop: "5%",
        backgroundColor: 'rgb(59,89,152)',
        shadowColor: 'transparent',
        height: 40,
        marginRight:"2%",
        width: 145,
        shadowOpacity: 0,
        elevation: 0,
    },
    integration_choice: {
        alignItems: "center",
        marginTop: "15%",
        marginBottom: "15%",
        marginLeft: "60%",
        marginRight: "40%",
        height: 35,
        width: 35,
        borderRadius: 180,
        backgroundColor: "rgba(134,134,134, 0.2)"
    },
    choice_text: {
        marginTop: "15%",
    },
})

export default styles;
