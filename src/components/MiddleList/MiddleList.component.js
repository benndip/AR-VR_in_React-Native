import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from './MiddleList.style'

class MiddleList extends Component {
  render() {
      const {source,largeText,smallText,price}=this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} style={styles.touch}> 
          <Image style={styles.image} source={source} />
        </TouchableOpacity>
        <View style={styles.textView}>
            <Text style={styles.largeText}>{largeText}</Text>
            <Text style={styles.smallText}>{smallText}</Text>
        </View>
        <View style={styles.starsAndPriceview}>
            <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    );
  }
}

export default MiddleList;
