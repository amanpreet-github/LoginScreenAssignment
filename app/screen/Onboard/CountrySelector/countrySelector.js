import React, { Component } from 'react'
import { Text, TouchableHighlight, TouchableWithoutFeedback, Modal, TouchableOpacity, View, TextInput, ListView, FlatList, Image, Dimensions } from 'react-native'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import cca2List from '../data/cca2'
const countries = require('../data/countries')


const window = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
class CountrySelector extends React.PureComponent {
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
            dataValue: ds.cloneWithRows(cca2List),
        }
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
            dataValue: ds.cloneWithRows(cca2List),
            cca2: cca2
        })
    }

    handleFilterChange = value => {
        var re = new RegExp(value, 'gi');
        const filteredCountries =
            value === '' ? cca2List : (cca2List||[]).filter(country => countries[country].name.common.match(re));
        this.setState({
            filter: value,
            dataValue: ds.cloneWithRows(filteredCountries)
        })
    }
    _keyExtractor = (item, index) => { return index; };

    render() {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { this.toggleModal() }}>
                    <View
                        style={styles.touchFlag}
                    >
                        <Text style={styles.countryCode}>+{countries[this.state.cca2].callingCode}</Text>
                        <FontAwesome name="sort-down" style={{ marginTop: 6, paddingRight: "3%" }} size={15} />
                    </View>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={this.state.modalVisible}
                    onBackdropPress={() => { console.log("pressed") }}
                    onRequestClose={() => this.setState({ modalVisible: false })}
                >

                    <View style={styles.backdrop}></View>
                    <View style={styles.parent}>
                        <View style={[{ backgroundColor: "#fff" }, styles.modalContainer]}>
                            <View style={styles.header}>
                                <FontAwesome name="search" size={18} />
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
                                <ListView
                                    keyboardShouldPersistTaps="always"
                                    enableEmptySections
                                    dataSource={this.state.dataValue}
                                    renderRow={country => (
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            onPress={() => { this.onSelectCountry(country) }}>
                                            <View style={styles.scrollItems}>
                                                <Image
                                                    style={[styles.imgStyle]}
                                                    source={{ uri: countries[country].flag }}
                                                    keyExtractor={this._keyExtractor}
                                                />
                                                <Text style={{ marginLeft: 25, marginTop: 18, fontSize: 15, color: '#8D8E8E', flex: 1, flexWrap: "wrap" }}>
                                                    {countries[country].name.common}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    initialListSize={30}
                                    pageSize={15}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default CountrySelector;