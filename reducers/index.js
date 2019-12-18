import {combineReducers} from 'redux';

import authReducer from './authReducer';
import warehouseReduser from './warehouseReduser';
import productsReduser from './productsReduser';

export default combineReducers({
  auth: authReducer,
  warehouse: warehouseReduser,
  products: productsReduser,
});
