import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userDetailsReducer from '../reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const Store = configureStore({
  reducer: {
    userDetailsReducer: persistReducer(persistConfig, userDetailsReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default Store;
export const persistor = persistStore(Store);
