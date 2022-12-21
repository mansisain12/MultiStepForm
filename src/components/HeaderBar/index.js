import * as React from 'react';
import {ProgressBar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {color} from '../../constant/color';
import {styles} from '../../utils/globalStyle';

const HeaderBar = () => {
  const progress = useSelector(state => state.userDetailsReducer.progress);

  return (
    <ProgressBar
      progress={progress}
      color={color.secondary}
      style={styles.progressBar}
    />
  );
};

export default HeaderBar;
