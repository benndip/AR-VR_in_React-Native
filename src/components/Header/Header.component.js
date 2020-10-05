import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './Header.style'
export class Header extends Component {
    render() {
        const {text,source}= this.props;
        return (
            <View style={styles.headerTextAndImage}>
                <View style={{ flexDirection:'row'}}>
                    <Text style={styles.hearderText}>Hello there, </Text>
                    <Text style={styles.hearderTextSpecial}>{text}</Text>
                </View>
                <Image source={source} style={styles.image} />
            </View>
        )
    }
}

export default Header
