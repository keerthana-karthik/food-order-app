import axios from 'axios';

let FIREBASE_API_URL = '';
if (process.env.REACT_APP_ENV_PROD)
  FIREBASE_API_URL = process.env.REACT_APP_FIREBASE_API_URL_PROD;
else FIREBASE_API_URL = process.env.REACT_APP_FIREBASE_API_URL_DEV;

const fetchMenuList = async category => {
  return await axios
    .get(FIREBASE_API_URL + 'menu/' + category + '.json')
    .then(async response => {
      return response.data;
    })
    .catch(error => {
      console.log('fetchMenuList API Err', error);
      return false;
    });
};
const createOrder = async postBody => {
  return axios
    .patch(FIREBASE_API_URL + `orders.json`, postBody)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log('createOrder API Err', error);
      return false;
    });
};

export { fetchMenuList, createOrder };
