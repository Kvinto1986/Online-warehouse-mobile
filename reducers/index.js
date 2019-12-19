import {combineReducers} from 'redux';

import authReducer from './authReducer';
import warehouseReduser from './warehouseReducer';
import productsReduser from './productsReducer';
import errorsReduser from './errorReducer';

export default combineReducers({
  auth: authReducer,
  warehouse: warehouseReduser,
  products: productsReduser,
  errors: errorsReduser,
});
