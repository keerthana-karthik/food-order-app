import axios from 'axios';
export const updateStateObject = (oldStateObject, updatedProperties) => {
  return {
    ...oldStateObject,
    ...updatedProperties
  };
};
const categoryDisplayNameMap = [
  { key: 'saturday', value: 'Saturday' },
  { key: 'sunday', value: 'Sunday' }
];
export const getCategoriesMap = () => {
  return categoryDisplayNameMap;
};
export const getCategoryDisplayName = key => {
  let categoryValue = '';
  categoryDisplayNameMap.map(category => {
    if (key === category.key) {
      categoryValue = category.value;
    }
  });
  return categoryValue;
};
