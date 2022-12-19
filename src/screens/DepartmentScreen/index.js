import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import AntDesignIcon from '../../components/AntDesignIcon';
import {styles} from '../../utils/globalStyle';
import {userDepartment} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';

const DepartmentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <AntDesignIcon />
      <View style={styles.screenHeader}></View>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.headerTxt}>
          Great! What department do you work in ?
        </Text>

        <ButtonComponent
          btnText="MARKETING"
          onPress={() => {
            dispatch(userDepartment('Marketing'));
            navigation.navigate('ContactForm');
          }}
        />
        <ButtonComponent
          btnText="SALES"
          onPress={() => {
            dispatch(userDepartment('Sales'));
            navigation.navigate('ContactForm');
          }}
        />
        <ButtonComponent
          btnText="DEVELOPMENT"
          onPress={() => {
            dispatch(userDepartment('development'));
            navigation.navigate('ContactForm');
          }}
        />
      </SafeAreaView>
    </>
  );
};
export default DepartmentScreen;
