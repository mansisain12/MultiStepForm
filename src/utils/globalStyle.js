import {Platform, StyleSheet} from 'react-native';
import {color} from '../constant/color';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: Platform.OS === 'android' ? RFPercentage(3.2) : RFPercentage(3),
    marginBottom: '10%',
    marginHorizontal: '6%',
  },
  progressBar: {
    borderRadius: 8,
    height: '10%',
    marginHorizontal: '6%',
    marginTop: '10%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: Platform.OS === 'ios' ? '10%' : '7%',
  },
});
