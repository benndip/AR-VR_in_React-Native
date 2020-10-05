import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Search.styles';
class Search extends Component {
  render() {
    const {
      placeholder,
      iconName,
      iconSize,
      iconColor,
      placeholderTextColor,
    } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
    );
  }
}

export default Search;
