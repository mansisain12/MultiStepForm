import {StyleSheet, Platform} from 'react-native';
import {color} from '../../constant/color';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: '50%',
  },
  modalHeader: {
    fontSize: Platform.OS === 'android' ? RFPercentage(3.2) : RFPercentage(3),
    marginBottom: '20%',
  },
  infoContainer: {
    marginLeft: '8%',
  },
  userData: {
    fontSize: Platform.OS === 'android' ? RFPercentage(2.4) : RFPercentage(2.1),
  },
  btnStyle: {
    alignSelf: 'flex-end',
    color: color.primary,
    marginTop: '22%',
    marginRight: 15,
    fontSize: Platform.OS === 'android' ? RFPercentage(2.3) : RFPercentage(2),
  },
});
