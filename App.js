import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';

import AppNavigator from './src/navigators/AppNavigator';
import Store, {persistor} from './src/redux/store/store';

const App = () => {
  return (
    <StoreProvider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};
export default App;
