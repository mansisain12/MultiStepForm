import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {styles} from '../../utils/globalStyle';
import {decreaseProgress} from '../../redux/actions/userAction';

const AntDesignIcon = () => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const crossBtn = () => {
    goBack();
    dispatch(decreaseProgress());
  };

  return (
    <View style={styles.iconContainer}>
      <AntDesign name="doubleleft" size={20} onPress={crossBtn} />
      <AntDesign name="close" size={20} />
    </View>
  );
};
export default AntDesignIcon;
