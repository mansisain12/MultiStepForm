import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    padding: Platform.OS === 'ios' ? 18 : 5,
    backgroundColor: 'white',
  },
  errmsg: {
    color: 'red',
    marginRight: '47%',
    marginLeft: 10,
  },
});
