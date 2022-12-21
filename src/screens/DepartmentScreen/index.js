import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import AntDesignIcon from '../../components/AntDesignIcon';
import {styles} from '../../utils/globalStyle';
import {userDepartment} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import HeaderBar from '../../components/HeaderBar';
import {increaseProgress} from '../../redux/actions/userAction';

const DepartmentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <AntDesignIcon />
      <HeaderBar />
      <SafeAreaView style={styles.screen}>
        <Text style={styles.headerTxt}>
          Great! What department do you work in ?
        </Text>

        <ButtonComponent
          btnText="MARKETING"
          onPress={() => {
            dispatch(userDepartment('Marketing'));
            dispatch(increaseProgress());
            navigation.navigate('ContactForm');
          }}
        />
        <ButtonComponent
          btnText="SALES"
          onPress={() => {
            dispatch(userDepartment('Sales'));
            dispatch(increaseProgress());
            navigation.navigate('ContactForm');
          }}
        />
        <ButtonComponent
          btnText="DEVELOPMENT"
          onPress={() => {
            dispatch(userDepartment('development'));
            dispatch(increaseProgress());
            navigation.navigate('ContactForm');
          }}
        />
      </SafeAreaView>
    </>
  );
};
export default DepartmentScreen;
