import React from 'react';
import {Modal, View, Text, Pressable} from 'react-native';

import {styles} from './style';

const UserInfoModal = props => {
  const {visible, closeBtn, CName, jobTitle} = props;

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text> Company Name: {CName}</Text>
          <Text> Job Title: {jobTitle}</Text>
          <Pressable onPress={closeBtn}>
            <Text style={styles.btnStyle}>CLOSE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default UserInfoModal;
