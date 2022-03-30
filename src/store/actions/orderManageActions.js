import * as actionTypes from './actionTypes';
export const addSelectedItem = item => {
  return {
    type: actionTypes.ADD_SELECTED_ITEM,
    selectedItem: item
  };
};
export const updateSelectedItem = item => {
  return {
    type: actionTypes.UPDATE_SELECTED_ITEM,
    selectedItem: item
  };
};
export const setSelectedItems = items => {
  return {
    type: actionTypes.SET_SELECTED_ITEMS,
    selectedItems: items
  };
};
export const deleteAllSelectedItems = () => {
  return {
    type: actionTypes.DELETE_ALL_SELECTED_ITEMS
  };
};
