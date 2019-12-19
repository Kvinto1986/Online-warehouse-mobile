import axios from 'axios';
import {GET_CURRENT_USER, ERRORS} from './types';
import jwt_decode from 'jwt-decode';

export const setCurrentUser = (decoded, token) => {
  return {
    type: GET_CURRENT_USER,
    payload: decoded,
    token: token,
  };
};

export const loginUser = (user, spinner) => dispatch => {
  console.log(user);
  axios
    .post('https://warehouse-online-backend.herokuapp.com/api/login', user)
    .then(res => {
      const {token} = res.data;
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded, token));
    })
    .then(() => {
      dispatch({
        type: ERRORS,
        payload: {},
      });
      spinner();
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: ERRORS,
          payload: err.response.data,
        });
      }
      spinner();
    });
};
