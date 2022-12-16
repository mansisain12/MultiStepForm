import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 15,
  },
});
