import React, { Component } from 'react'
import { Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, View, TextInput, FlatList, Image } from 'react-native'
import styles from './styles'
import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal';
import Modal from "react-native-modal";
import { FontAwesome } from '@expo/vector-icons'
import cca2List from '../data/cca2'
const countries = require('../data/countries')
import Fuse from 'fuse.js'


class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{ color: textColor }}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}


class CountrySelector extends Component {
    constructor(props) {
        super(props);
        let cca2, callingCode, countryList = cca2List;
        cca2 = 'IN'
        callingCode = '+91'

        this.state = {
            cca2,
            callingCode,
            modalVisible: false,
            filter: '',
            dataValue: cca2List
        }


        this.fuse = new Fuse(
            countryList.reduce(
                (acc, item) => [
                    ...acc,
                    { id: item, name: this.getCountryName(countries[item]) }
                ],
                []
            ),
            {
                shouldSort: true,
                threshold: 0.6,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: ['name'],
                id: 'id'
            }
        )
    }
    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    onSelectCountry(cca2) {
        this.setState({
            modalVisible: false,
            filter: '',
            dataValue: cca2List
        })
    }


    getCountryName(country, optionalTranslation) {
        const translation = optionalTranslation || this.props.translation || 'eng'
        return country.name[translation] || country.name.common
    }


    handleFilterChange = value => {
        console.log('values=======', value);
        const filteredCountries =
            value === '' ? cca2List : this.fuse.search(value)

        // this._listView.scrollTo({ y: 0 })
        console.log('filtered countries --------', filteredCountries);
        this.setState({
            filter: value,
            dataValue: filteredCountries
        })
    }
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }
    _keyExtractor = (item, index) => item;

    _renderItem = ({ item }) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );
    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => { this.toggleModal() }}>
                    <View
                        style={styles.touchFlag}
                    >
                        <Text style={styles.countryCode}>+{countries[this.state.cca2].callingCode} <FontAwesome name="sort-down" size={15} style={{ textAlign: 'auto' }} /> </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Modal
                    style={{ marginTop: "5%", marginLeft: "9%", marginRight: "9%", marginBottom: "5%", backgroundColor: "white" }}
                    transparent={true}
                    onBackdropPress={() => console.log("Pressed")}
                    animationType={'none'}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false })}   >
                    <View style={styles.modalContainer}>
                        <View style={styles.header}>
                            <FontAwesome name="search" size={18} style={{}} />
                            <TextInput
                                autoCorrect={false}
                                placeholder={'Search...'}
                                placeholderTextColor={'rgb(200,200,200)'}
                                style={[
                                    styles.input,
                                    styles.inputOnly
                                ]}
                                onChangeText={this.handleFilterChange}
                                value={this.state.filter}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <FlatList
                                data={this.state.dataValue}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => { this.onSelectCountry(item) }}>
                                        <View style={styles.scrollItems}>
                                            <Image
                                                style={[styles.imgStyle]}
                                                source={{ uri: countries[item].flag }}
                                                keyExtractor={this._keyExtractor}
                                            />
                                            <Text style={{ marginLeft: 25, marginTop: 18, fontSize: 15, color: '#8D8E8E' }}>
                                                {countries[item].name.common}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )} />
                        </View>

                    </View>
                </Modal>

            </View>
        );
    }
}

export default CountrySelector;