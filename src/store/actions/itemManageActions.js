import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setItems = items => {
  return {
    type: actionTypes.SET_ALL_ITEMS,
    items: items
  };
};
export const fetchItemsFailed = () => {
  return {
    type: actionTypes.FETCH_ITEMS_FAILED
  };
};
export const initItems = items => {
  // return dispatch => {
  //     axios.get( 'https://my-json-server.typicode.com/keerthana-karthik/ecommerce/items' )
  //         .then( response => {
  //            dispatch(setItems(response.data));
  //         } )
  //         .catch( error => {
  //             dispatch(fetchItemsFailed());
  //         } );
  // };
  return {
    type: actionTypes.SET_ALL_ITEMS,
    items: items
  };
};
