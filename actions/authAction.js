import axios from 'axios';
import {GET_CURRENT_USER} from './types';
import jwt_decode from 'jwt-decode';

export const setCurrentUser = (decoded, token) => {
  return {
    type: GET_CURRENT_USER,
    payload: decoded,
    token: token,
  };
};

export const loginUser = user => dispatch => {
  console.log(user);
  axios
    .post('https://warehouse-online-backend.herokuapp.com/api/login', user)
    .then(res => {
      const {token} = res.data;
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded, token));
    });
};
