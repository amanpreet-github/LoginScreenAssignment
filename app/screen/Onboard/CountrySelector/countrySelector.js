import React, { Component } from 'react'
import { View, Text, NavFooter, TextInput } from 'react-native'
import { Button } from 'native-base'
import styles from './styles'
import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal';

class CountrySelector extends Component {

    constructor(props) {
        super(props);
         let cca2, callingCode;
          cca2 = 'IN'
          callingCode = '+91'  

        this.state = {
          cca2,
          callingCode
        }
    }

    render() {
        const ALL_COUNTRIES = getAllCountries().map(country => country.cca2);
            return (
                            <CountryPicker
                                countryList={ALL_COUNTRIES}
                                onChange={value => {
                                    this.setState({ cca2: value.cca2, callingCode: value.callingCode })
                                }}
                                cca2={this.state.cca2}
                                callingCode ={this.state.callingCode}
                                translation="eng"
                                showCallingCode= {true}  
                                filterable ={true}  
                                filterPlaceholder ="Search"
                            />
            )
    }
}

export default CountrySelector
