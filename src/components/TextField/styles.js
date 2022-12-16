import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    padding: Platform.OS === 'ios' ? 25 : 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    width: 380,
    padding: Platform.OS === 'ios' ? 18 : 5,
  },
  errmsg: {
    color: 'red',
    marginLeft: 10,
  },
});
