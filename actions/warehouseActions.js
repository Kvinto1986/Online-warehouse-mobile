import axios from 'axios';
import {ERRORS, GET_CURRENT_WAREHOUSE} from './types';

export const getWarehouse = (license, token, nextPage, spinner) => dispatch => {
  let config = {
    headers: {
      Authorization: token,
    },
  };
  axios
    .get(
      `https://warehouse-online-backend.herokuapp.com/api/warehouses/${license}`,
      config,
    )
    .then(res => {
      dispatch({
        type: GET_CURRENT_WAREHOUSE,
        payload: res.data,
      });
      nextPage();
    })
    .then(() => {
      dispatch({
        type: ERRORS,
        payload: {},
      });
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: ERRORS,
          payload: err.response.data,
        });
        spinner();
      }
    });
};
