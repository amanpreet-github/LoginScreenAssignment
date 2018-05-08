import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	window: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	wrapper: {
		flex: 1,
		paddingLeft: '5.5%',
		paddingRight: '5.5%',
	},
	backgroundImage: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height ,
		backgroundColor: "#000", position: "absolute",
	},
	header_text: {
		maxWidth: '80%',
		marginTop: '25%',
		paddingLeft: "27%",
		marginBottom: '6%',
	},
	text_header: {
		color: 'black',
		fontSize: 26,
		fontWeight: 'bold'
	},
	skip_login: {
		marginTop: "9%",
	},
	skip_text: {
		textAlign: 'center',
		fontSize:12,
		fontWeight:"bold",  
		color:"#a5a4a4"
	},
});
export default styles;
