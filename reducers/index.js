import {combineReducers} from 'redux';

import authReducer from './authReducer';
import warehouseReduser from './warehouseReduser';

export default combineReducers({
  auth: authReducer,
  warehouse: warehouseReduser,
});
