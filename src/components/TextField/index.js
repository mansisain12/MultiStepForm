import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';

const TextField = props => {
  const {errorMessage, label} = props;

  return (
    <>
      <View style={styles.textInput}>
        <TextInput
          {...props}
          mode="outlined"
          label={label}
          outlineColor="lightgrey"
        />
      </View>
      <Text style={styles.errmsg}>{errorMessage}</Text>
    </>
  );
};
export default TextField;
