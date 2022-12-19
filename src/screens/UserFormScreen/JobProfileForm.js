import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import AntDesignIcon from '../../components/AntDesignIcon';

import {userCompanyName, userJobTitle} from '../../redux/actions/userAction';
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import {validateName} from '../../utils/validation';
import UserInfoModal from '../../components/UserInfoModal';
import {styles} from '../../utils/globalStyle';

const ContactDetailsForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [validation, setValidation] = useState({
    companyNameError: '',
    jobTitleError: '',
  });

  const companyNameValidator = () => {
    companyName == '' || !validateName(companyName)
      ? setValidation({
          ...validation,
          companyNameError: 'Please enter a valid company name',
        })
      : setValidation({...validation, companyNameError: ''});
  };
  const jobTitleValidator = () => {
    jobTitle == '' || !validateName(jobTitle)
      ? setValidation({
          ...validation,
          jobTitleError: 'Please enter a valid job title',
        })
      : setValidation({...validation, jobTitleError: ''});
  };
  const btnHandler = () => {
    dispatch(userCompanyName(companyName));
    dispatch(userJobTitle(jobTitle));
    setIsModalVisible(true);
  };
  const closeBtnHandler = () => {
    navigation.popToTop();
    setIsModalVisible(false);
  };

  return (
    <>
      <AntDesignIcon />
      <View style={styles.screenHeader}></View>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.headerTxt}>
          Thanks!😊 Just a few more details and we are done!
        </Text>

        <TextField
          placeholder="Company Name"
          value={companyName}
          onBlur={() => companyNameValidator()}
          onChangeText={val => setCompanyName(val)}
          errorMessage={validation.companyNameError}
        />
        <TextField
          placeholder="Job Title"
          value={jobTitle}
          onBlur={() => jobTitleValidator()}
          onChangeText={val => setJobTitle(val)}
          errorMessage={validation.jobTitleError}
        />
        <ButtonComponent
          btnText="REQUEST DEMO"
          onPress={btnHandler}
          disabled={
            !validateName(companyName) || !validateName(jobTitle) ? true : false
          }
        />
        <UserInfoModal visible={isModalVisible} closeBtn={closeBtnHandler} />
      </SafeAreaView>
    </>
  );
};
export default ContactDetailsForm;
