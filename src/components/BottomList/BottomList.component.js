import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './BottomList.style'
class BottomList extends Component {
  render() {
    const {source,countryName} = this.props
    return (
      <View style={styles.container}>
        <Image source={source}  style={styles.image} />
        <Text style={styles.text}>{countryName}</Text>
      </View>
    );
  }
}

export default BottomList;
