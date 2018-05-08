import { StyleSheet, Platform, PixelRatio } from 'react-native';
import { getHeightPercent } from './ratio'

const styles = StyleSheet.create({
    shadow: {
        height: "100%",
        width: "20%",
        backgroundColor: 'rgba(211,211,211,0.3)'
    },
    touchFlag: {
        backgroundColor: 'rgba(211,211,211,0.3)'
    },
    countryCode: {

    },
    modalContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#71BFB4',
        borderBottomWidth: 1.5,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 0
    },
    input: {
        marginTop:3, 
        width: '100%'
    },
    inputOnly: {
        marginLeft: 3,
        fontSize: 21
    },
    touchFlag: {
        height: 19,

    },
    countryCode: {
        marginLeft: 10,
        paddingBottom: 10,
        textAlignVertical: 'center',

    },
    downarrow: {
        paddingTop: 10
    },
    contentContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10

    },
    scrollItems: {
        flexDirection:'row',
    },
    imgStyle: {
        resizeMode: 'contain',
        width: 26,
        height: 26,
        marginLeft: 20,
        opacity: 0.8, 
        marginTop:18, 
        marginBottom: 4
        
    },
    
    sortDown: {
        marginBottom: 5
    },
    emojiFlag: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        width: 30,
        height: 30,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: 'transparent',
        backgroundColor: 'transparent'
    },
    itemCountry: {
        flexDirection: 'row',
        height: getHeightPercent(7),
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemCountryFlag: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '7%',
        width: '15%'
    },
    itemCountryName: {
        justifyContent: 'center',
        width: '70%',
        borderBottomWidth: 2 / PixelRatio.get(),
        borderBottomColor: '#ccc',
        height: 20
    },
    countryName: {
        fontSize: getHeightPercent(2.2)
    },
    scrollView: {
        flex: 1
    },
    letters: {
        marginRight: 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        height: 25,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterText: {
        textAlign: 'center',
        fontSize: getHeightPercent(2.2)
    },
    closeButton: {
        height: 48,
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButtonImage: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }

})

export default styles;