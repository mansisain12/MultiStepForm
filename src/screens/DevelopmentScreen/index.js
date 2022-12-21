import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import ButtonComponent from '../../components/ButtonComponent';
import {styles} from '../../utils/globalStyle';
import {userDevelopment} from '../../redux/actions/userAction';
import HeaderBar from '../../components/HeaderBar';
import {increaseProgress} from '../../redux/actions/userAction';

const DevelopmentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <AntDesign
        name="close"
        size={20}
        style={[styles.iconContainer, {alignSelf: 'flex-end'}]}
      />
      <HeaderBar />
      <View style={styles.screen}>
        <Text style={styles.headerTxt}>
          Welcome! 😊 What are you looking for ?
        </Text>

        <ButtonComponent
          btnText="APP DEVELOPMENT"
          onPress={() => {
            dispatch(userDevelopment('App development')),
              dispatch(increaseProgress());
            navigation.navigate('Department');
          }}
        />
        <ButtonComponent
          btnText="WEB DEVELOPMENT"
          onPress={() => {
            dispatch(userDevelopment('Web development')),
              dispatch(increaseProgress());
            navigation.navigate('Department');
          }}
        />
        <ButtonComponent
          btnText="BACKEND DEVELOPMENT"
          onPress={() => {
            dispatch(userDevelopment('Backend development')),
              dispatch(increaseProgress());
            navigation.navigate('Department');
          }}
        />
      </View>
    </>
  );
};
export default DevelopmentScreen;
