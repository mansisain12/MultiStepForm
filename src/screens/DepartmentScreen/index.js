import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import AntDesignIcon from '../../components/AntDesignIcon';
import {styles} from '../../utils/globalStyle';

const DepartmentScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <AntDesignIcon />
      <SafeAreaView style={styles.screen}>
        <Text style={styles.headerTxt}>
          Great! What department do you work in ?
        </Text>

        <ButtonComponent
          btnText="MARKETING"
          onPress={() => navigation.navigate('ContactForm')}
        />
        <ButtonComponent
          btnText="SALES"
          onPress={() => navigation.navigate('ContactForm')}
        />
        <ButtonComponent
          btnText="DEVELOPMENT"
          onPress={() => navigation.navigate('ContactForm')}
        />
      </SafeAreaView>
    </>
  );
};
export default DepartmentScreen;
