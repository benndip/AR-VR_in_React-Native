import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './SolidButton.styles';
const SolidButton = props => {
  return (
    <TouchableOpacity style={styles.touch}>
      <Text style={styles.buttonText}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};
export default SolidButton;
