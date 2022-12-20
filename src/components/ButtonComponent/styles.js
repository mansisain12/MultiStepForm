import {Platform, StyleSheet} from 'react-native';
import {color} from '../../constant/color';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: color.primary,
    borderRadius: 25,
    margin: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '6%',
  },
  textContent: {
    color: 'white',
    textAlign: 'center',
    padding: 15,
    fontSize: Platform.OS === 'android' ? RFPercentage(2.2) : RFPercentage(2),
  },
});
