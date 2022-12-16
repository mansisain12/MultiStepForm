import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

const ButtonComponent = ({btnText, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.textContent}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
