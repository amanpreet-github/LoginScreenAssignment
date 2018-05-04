import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingLeft: '7%',
		paddingRight: '7%',
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
	  },
	header_text: 	{
		maxWidth: '80%',
		marginTop: '25%',
		paddingLeft: "25%",
		marginBottom: '8%',
	},
	text_header: {
		color: 'black',
		fontSize: 22
	},
	skip_login: {
		marginTop: "10%",
	},
	skip_text: {
		textAlign: 'center'
	},
});
export default styles;
