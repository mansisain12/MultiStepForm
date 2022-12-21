import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import AntDesignIcon from '../../components/AntDesignIcon';

import {userFirstName, userLastName} from '../../redux/actions/userAction';
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import {validateName} from '../../utils/validation';
import {styles} from '../../utils/globalStyle';
import HeaderBar from '../../components/HeaderBar';
import {increaseProgress} from '../../redux/actions/userAction';

const ContactDetailsForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const [validation, setValidation] = useState({
    fNameError: '',
    lNameError: '',
  });

  const fNameValidator = () => {
    fName == '' || !validateName(fName)
      ? setValidation({...validation, fNameError: 'First name is required'})
      : setValidation({...validation, fNameError: ''});
  };
  const lNameValidator = () => {
    lName == '' || !validateName(lName)
      ? setValidation({...validation, lNameError: 'Last name is required'})
      : setValidation({...validation, lNameError: ''});
  };
  const btnHandler = () => {
    dispatch(userFirstName(fName));
    dispatch(userLastName(lName));
    dispatch(increaseProgress());
    navigation.navigate('JobProfileForm');
  };

  return (
    <>
      <AntDesignIcon />
      <HeaderBar />
      <SafeAreaView style={styles.screen}>
        <Text style={styles.headerTxt}>
          Could you tell us a bit more about yourself?
        </Text>

        <TextField
          label="First Name *"
          value={fName}
          onBlur={() => fNameValidator()}
          onChangeText={val => setFName(val)}
          errorMessage={validation.fNameError}
        />
        <TextField
          label="Last Name *"
          value={lName}
          onBlur={() => lNameValidator()}
          onChangeText={val => setLName(val)}
          errorMessage={validation.lNameError}
        />
        <ButtonComponent
          btnText="NEXT"
          onPress={btnHandler}
          disabled={!validateName(fName) || !validateName(lName) ? true : false}
        />
      </SafeAreaView>
    </>
  );
};
export default ContactDetailsForm;
