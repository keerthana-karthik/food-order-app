import * as Actions from '../actions/actionTypes';
import { updateStateObject } from '../../helpers/CatalogHelper';
const initialState = {
  selectedItems: [],
  totalQuantity: 0,
  totalPrice: 0
};
const addSelectedItem = (state, action) => {
  let newTotalPrice = 0;
  let newTotalQuantity = 0;
  let newSelectedItems = [];
  let priceForSelectedQuantity = parseInt(action.selectedItem.price);
  let newSelectedItem = {
    ...action.selectedItem,
    selectedQuantity: 1,
    priceForSelectedQuantity: priceForSelectedQuantity
  };
  newSelectedItems = [...state.selectedItems];
  newSelectedItems.push(newSelectedItem);
  newTotalPrice = parseInt(state.totalPrice) + priceForSelectedQuantity;
  newTotalQuantity = parseInt(state.totalQuantity) + 1;
  const updatedState = {
    selectedItems: newSelectedItems,
    totalQuantity: newTotalQuantity,
    totalPrice: newTotalPrice
  };
  return updateStateObject(state, updatedState);
};
const updateSelectedItem = (state, action) => {
  let newTotalPrice = 0;
  let newTotalQuantity = 0;
  let newSelectedItem = {};
  let newSelectedItems = [];
  let newPriceForQuantity = 0;
  let oldPriceForQuantity = 0;
  let newSelectedQuantity = 0;
  let oldSelectedQuantity = 0;

  newSelectedItems = [...state.selectedItems];
  for (let index in newSelectedItems) {
    if (newSelectedItems[index].id === action.selectedItem.selectedId) {
      oldSelectedQuantity = newSelectedItems[index].selectedQuantity;
      newSelectedQuantity = parseInt(action.selectedItem.selectedQuantity);
      oldPriceForQuantity = newSelectedItems[index].priceForSelectedQuantity;
      newPriceForQuantity = newSelectedItems[index].price * newSelectedQuantity;
      if (newSelectedQuantity < 1) {
        newSelectedItems.splice(index, 1);
      } else {
        newSelectedItem = {
          ...newSelectedItems[index],
          selectedQuantity: action.selectedItem.selectedQuantity,
          priceForSelectedQuantity: newPriceForQuantity
        };
        newSelectedItems[index] = newSelectedItem;
      }
      newTotalQuantity =
        state.totalQuantity + newSelectedQuantity - oldSelectedQuantity;
      newTotalPrice =
        state.totalPrice + newPriceForQuantity - oldPriceForQuantity;
    }
  }
  const updatedState = {
    selectedItems: newSelectedItems,
    totalQuantity: newTotalQuantity,
    totalPrice: newTotalPrice
  };
  return updateStateObject(state, updatedState);
};
const setSelectedItems = (state, action) => {
  return updateStateObject(state, {
    selectedItems: [...action.items]
  });
};
const deleteAllSelectedItems = (state, action) => {
  return updateStateObject(state, {
    ...initialState
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.DELETE_ALL_SELECTED_ITEMS:
      return deleteAllSelectedItems(state, action);
    case Actions.SET_SELECTED_ITEMS:
      return setSelectedItems(state, action);
    case Actions.ADD_SELECTED_ITEM:
      return addSelectedItem(state, action);
    case Actions.UPDATE_SELECTED_ITEM:
      return updateSelectedItem(state, action);
    default:
      return state;
  }
};

export default reducer;
