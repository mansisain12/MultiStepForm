import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import {styles} from '../../utils/globalStyle';

const DevFieldScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text style={styles.headerTxt}>
        Welcome! 😊 What are you looking for ?
      </Text>

      <ButtonComponent
        btnText="WEB DEVELOPMENT"
        onPress={() => navigation.navigate('Department')}
      />
      <ButtonComponent
        btnText="WEB DEVELOPMENT"
        onPress={() => navigation.navigate('Department')}
      />
      <ButtonComponent
        btnText="BACKEND DEVELOPMENT"
        onPress={() => navigation.navigate('Department')}
      />
    </View>
  );
};
export default DevFieldScreen;
