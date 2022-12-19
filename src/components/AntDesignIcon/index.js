import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from '../../utils/globalStyle';

const AntDesignIcon = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.iconContainer}>
      <AntDesign name="doubleleft" size={20} onPress={() => goBack()} />
      <AntDesign name="close" size={20} />
    </View>
  );
};
export default AntDesignIcon;
