import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    login_box: {
        paddingTop: "8%",
        height: "50%",
        width: "100%",
        borderRadius: 8,
        backgroundColor: "white",
        borderColor: "rgb(134,134,134)"
    },
    skip_login: {
        marginTop: "10%",
    },
    skip_text: {
        textAlign: 'center'
    },
    box_text: {
        textAlign: 'center'
    },
    continue_login: {
        paddingLeft:"3%",
        paddingRight:"3%", 
        marginTop : "3%" 

    }, 
    continue_button: {  
        width:"100%",
        paddingLeft : "35%",
        marginBottom: "5%",
        backgroundColor:"rgb(240,230,140) ", 
    },
    conitnue_text: {
        textAlign:'center', 
        fontSize:22
    }, 
    input_details: {
        padding:"3%",  
        flexDirection:"row", 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }, 
    input_text: {
        width:"100%",
        borderColor:'gray',
        paddingLeft:"10%"
    }, 
    integration_choice: {
        alignItems:"center",
        marginTop:"15%",
        marginBottom:"15%",  
        marginLeft:"43%",    
        marginRight:"40%",    
        height: 35,
        width: 35, 
        borderRadius: 180,
        backgroundColor: "rgba(134,134,134, 0.2)"
    },
    choice_text: {
        marginTop:"20%"
    }, 
})

export default styles;
