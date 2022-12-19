import React, {useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import AntDesignIcon from '../../components/AntDesignIcon';

import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import {validateEmail, validatePhNumber} from '../../utils/validation';
import {userEmail, userPhone} from '../../redux/actions/userAction';
import {styles} from '../../utils/globalStyle';

const ContactDetailsForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    phoneNumError: '',
  });

  const emailValidator = () => {
    email == '' || !validateEmail(email)
      ? setValidation({...validation, emailError: 'please enter a valid email'})
      : setValidation({...validation, emailError: ''});
  };
  const phoneNumValidator = () => {
    phoneNum == '' || !validatePhNumber(phoneNum)
      ? setValidation({
          ...validation,
          phoneNumError: 'please enter a valid mobile number',
        })
      : setValidation({...validation, phoneNumError: ''});
  };

  const btnHandler = () => {
    dispatch(userEmail(email));
    dispatch(userPhone(phoneNum));
    navigation.navigate('NameForm');
  };

  return (
    <>
      <AntDesignIcon />
      <View style={styles.screenHeader}></View>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.headerTxt}>
          What is the email and phone number that we can reach you the best?
        </Text>
        <TextField
          placeholder="Email"
          value={email}
          onBlur={() => emailValidator()}
          onChangeText={val => setEmail(val)}
          errorMessage={validation.emailError}
        />
        <TextField
          name="phone"
          placeholder="Mobile number"
          value={phoneNum}
          onBlur={() => phoneNumValidator()}
          onChangeText={val => setPhoneNum(val)}
          errorMessage={validation.phoneNumError}
        />
        <ButtonComponent
          btnText="NEXT"
          onPress={btnHandler}
          disabled={
            !validateEmail(email) || !validatePhNumber(phoneNum) ? true : false
          }
        />
      </SafeAreaView>
    </>
  );
};
export default ContactDetailsForm;
