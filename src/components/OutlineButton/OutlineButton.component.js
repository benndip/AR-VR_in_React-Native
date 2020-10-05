import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './OutlineButton.styles';
const OutlineButton = props => {
  return (
    <TouchableOpacity style={styles.touch}>
      <Text style={styles.buttonText}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
}
export default OutlineButton;
