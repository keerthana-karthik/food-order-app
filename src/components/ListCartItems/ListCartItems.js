import React from 'react';
import PriceComponent from '../Price/PriceComponent';
import sideCartClasses from '../SideCart/SideCartComponent.css';
import QuantityButtonComponent from '../Forms/QuantityButton/QuantityButtonComponent';
import {
  getCategoriesMap,
  getCategoryDisplayName
} from '../../helpers/CatalogHelper';

const ListCartItems = ({ selecteditemsArray }) => {
  let itemArrayGroupByCategory = {};
  let items = [];
  getCategoriesMap().forEach(category => {
    selecteditemsArray.forEach(item => {
      if (item.category === category.key) {
        if (itemArrayGroupByCategory[category.key]) {
          itemArrayGroupByCategory[category.key].push(item);
        } else {
          itemArrayGroupByCategory[category.key] = [];
          itemArrayGroupByCategory[category.key].push(item);
        }
      }
    });
  });
  for (const key in itemArrayGroupByCategory) {
    if (itemArrayGroupByCategory.hasOwnProperty(key)) {
      let itemsArray = itemArrayGroupByCategory[key];
      items.push(
        <div
          className={sideCartClasses.cartItemWrapper}
          key={'itemwrapper' + key}
        >
          <div className={sideCartClasses.cartItem}>
            <div className={sideCartClasses.cartItemDetail}>
              <div className={sideCartClasses.cartCategoryDisplayName}>
                {getCategoryDisplayName(key)}
              </div>
              {itemsArray.map(item => {
                return (
                  <div
                    key={'cartItemQuantityPrice' + item.id}
                    className={sideCartClasses.cartItemQuantityPrice}
                  >
                    <div className={sideCartClasses.cartItemTitle}>
                      {item.name}
                      {'  - '}
                      {item.quantity * item.selectedQuantity}{' '}
                      {item.quantitySuffix}
                    </div>
                    <div className={sideCartClasses.cartItemPrice}>
                      <PriceComponent key={'PriceComponent' + item.id}>
                        {item.priceForSelectedQuantity}
                      </PriceComponent>
                      <QuantityButtonComponent
                        key={'QuantityButtonComponent' + item.id}
                        selectedItem={item}
                        selectedQuantity={item.selectedQuantity}
                      ></QuantityButtonComponent>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
  return items;
};

export default ListCartItems;
