import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    login_box: {
        paddingTop: "8%",
        width: "100%",
        borderRadius: 7,
        backgroundColor: "white",
        borderColor: "rgba(134,134,134, 0.5)",
        borderWidth: 0.4
    },
    skip_login: {
        marginTop: "10%",
    },
    skip_text: {
        textAlign: 'center'
    },
    box_text: {
        textAlign: 'center',
        color: 'rgb(61, 60, 60)',
        fontSize: 17,
        fontWeight: 'normal'
    },
    continue_login: {
        paddingLeft: "3%",
        paddingRight: "5%",
        marginTop: "7%",
        justifyContent: 'center'

    },
    continue_button: {
        width: "100%",
        paddingLeft: "36.5%",
        marginBottom: "7.8%",
        backgroundColor: "rgb(240,230,140) ",
        elevation: 0,
      

    },
    conitnue_text: {
        textAlign: 'center',
        fontSize: 22
    },
    input_details: {
        flexDirection: "row",
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: "92%",
        marginLeft: "3%",
    },
    input_text: {
        width: "100%",
        borderColor: 'gray',
        marginLeft: "7%",
        fontSize: 16,
        marginBottom: 3
    },
    integration_choice: {
        alignItems: "center",
        marginTop: "13%",
        marginBottom: "15%",
        marginLeft: "45%",
        marginRight: "40%",
        height: 27,
        width: 27,
        borderRadius: 180,
        backgroundColor: "rgba(215,211,211,0.3)"
    },
    choice_text: {
        marginTop: "15%",
        fontSize: 14
    },
})

export default styles;
