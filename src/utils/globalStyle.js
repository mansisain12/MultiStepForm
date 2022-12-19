import {StyleSheet} from 'react-native';
import {color} from '../constant/color';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 25,
    marginBottom: '10%',
    marginHorizontal: '6%',
  },
  screenHeader: {
    borderWidth: 6,
    borderColor: color.secondary,
    borderRadius: 8,
    marginHorizontal: '6%',
    marginTop: '10%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
});
