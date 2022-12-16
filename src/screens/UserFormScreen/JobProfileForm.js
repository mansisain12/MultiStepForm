import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesignIcon from '../../components/AntDesignIcon';

import {userDetails} from '../../redux/actions/userAction';
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import {validateName} from '../../utils/validation';
import UserInfoModal from '../../components/UserInfoModal';

const ContactDetailsForm = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userInfo = useSelector(state => state.userDetailsReducer.userInfo);

  const [validation, setValidation] = useState({
    companyNameError: '',
    jobTitleError: '',
  });

  const companyNameValidator = () => {
    companyName == '' || !validateName(companyName)
      ? setValidation({
          ...validation,
          companyNameError: 'Company name is required',
        })
      : setValidation({...validation, companyNameError: ''});
  };
  const jobTitleValidator = () => {
    jobTitle == '' || !validateName(jobTitle)
      ? setValidation({...validation, jobTitleError: 'Last name is required'})
      : setValidation({...validation, jobTitleError: ''});
  };
  const btnHandler = () => {
    const userInfo = {
      companyName: companyName,
      jobTitle: jobTitle,
    };
    dispatch(userDetails(userInfo));
    setIsModalVisible(true);
  };

  return (
    <>
      <AntDesignIcon />
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
        <UserInfoModal
          visible={isModalVisible}
          closeBtn={() => setIsModalVisible(false)}
          CName={userInfo.companyName}
          jobTitle={jobTitle}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: '5%',
    textAlign: 'center',
  },
});
export default ContactDetailsForm;
