import * as Actions from '../actions/actionTypes';
import { updateStateObject } from '../../helpers/CatalogHelper';
const initialState = {
  items: []
};

const setAllItems = (state, action) => {
  return updateStateObject(state, {
    items: [...action.items]
  });
};
const fetchItemsFailed = (state, action) => {
  return updateStateObject(state, { error: true });
};
const addItem = (state, action) => {};
const updateItem = (state, action) => {};
const removeItem = (state, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_ALL_ITEMS:
      return setAllItems(state, action);
    case Actions.ADD_ITEM:
      return addItem(state, action);
    case Actions.UPDATE_ITEM:
      return updateItem(state, action);
    case Actions.REMOVE_ITEM:
      return removeItem(state, action);
    case Actions.FETCH_ITEMS_FAILED:
      return fetchItemsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
