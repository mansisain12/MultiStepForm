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
    height: '50%',
  },
  message: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 16,
  },
  btnStyle: {
    alignSelf: 'flex-end',
    color: color.primary,
    marginTop: '105%',
    marginRight: 10,
    fontSize: 14,
  },
});
