import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

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
    height: '52%',
  },
  modalHeader: {
    fontSize: 25,
    marginBottom: '20%',
  },
  infoContainer: {
    marginLeft: '8%',
  },
  userData: {
    fontSize: 19,
  },
  btnStyle: {
    alignSelf: 'flex-end',
    color: color.primary,
    marginTop: '22%',
    marginRight: 15,
    fontSize: 18,
  },
});
