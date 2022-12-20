import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DevelopmentScreen from '../screens/DevelopmentScreen';
import DepartmentScreen from '../screens/DepartmentScreen';
import ContactDetailsForm from '../screens/UserFormScreen/ContactDetailsForm';
import UserNameForm from '../screens/UserFormScreen/UserNameForm';
import JobProfileForm from '../screens/UserFormScreen/JobProfileForm';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Development" component={DevelopmentScreen} />
        <Stack.Screen name="Department" component={DepartmentScreen} />
        <Stack.Screen name="ContactForm" component={ContactDetailsForm} />
        <Stack.Screen name="NameForm" component={UserNameForm} />
        <Stack.Screen name="JobProfileForm" component={JobProfileForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
