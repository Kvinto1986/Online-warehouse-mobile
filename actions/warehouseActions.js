import axios from 'axios';
import {GET_CURRENT_WAREHOUSE} from './types';

export const getWarehouse = (license, token, nextPage) => dispatch => {
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
    });
};
