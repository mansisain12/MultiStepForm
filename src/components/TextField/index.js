import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './styles';

const TextField = props => {
  const {errorMessage} = props;

  return (
    <>
      <View style={styles.textInput}>
        <TextInput {...props} placeholderTextColor="black" />
      </View>
      <Text style={styles.errmsg}>{errorMessage}</Text>
    </>
  );
};
export default TextField;
