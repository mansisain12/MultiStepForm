import React from 'react';
import {Modal, View, Text, Pressable} from 'react-native';

import {styles} from './style';
import {useSelector} from 'react-redux';

const UserInfoModal = ({visible, closeBtn}) => {
  const {
    email,
    phone,
    fName,
    lName,
    companyName,
    jobTitle,
    development,
    department,
  } = useSelector(state => state.userDetailsReducer);

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.infoContainer}>
            <Text style={styles.modalHeader}>Data</Text>

            <Text style={styles.userData}>Product:- {development}</Text>
            <Text style={styles.userData}>Department:- {department}</Text>
            <Text style={styles.userData}>Email:- {email}</Text>
            <Text style={styles.userData}>Phone:- {phone}</Text>
            <Text style={styles.userData}>
              Name:- {fName} {lName}
            </Text>
            <Text style={styles.userData}>Company Name:- {companyName}</Text>
            <Text style={styles.userData}>Job Title:- {jobTitle}</Text>
          </View>

          <Pressable onPress={closeBtn}>
            <Text style={styles.btnStyle}>CLOSE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default UserInfoModal;
