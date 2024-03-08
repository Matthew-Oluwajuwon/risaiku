import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer, setAllAppKeys, setAppKey } from './appSlice';

const reducer = combineReducers({
  app: appReducer
})

export { setAllAppKeys, setAppKey }

export default store = configureStore({
  reducer
});
