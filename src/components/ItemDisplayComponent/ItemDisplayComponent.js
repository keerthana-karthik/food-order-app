import React, { useEffect, Fragment } from 'react';
import AddToCartComponent from '../Forms/AddToCart/AddToCartComponent';
import ButtonComponent from '../Forms/Button/ButtonComponent';
import PriceComponent from '../Price/PriceComponent';
import indexClasses from '../../index.css';
import manageItemClasses from '../ManageItems/ManageItemsComponent.css';
import QuantityButtonComponent from '../Forms/QuantityButton/QuantityButtonComponent';

const ItemDisplayComponent = ({
  item,
  selectedItemsArray,
  getIndexInSelectedItemsArray
}) => {
  {
    let buttonToSelect = null;
    let selectedItemIndex = getIndexInSelectedItemsArray(item.id);
    let selectedItemQuantity = 0;
    if (selectedItemIndex > -1) {
      selectedItemQuantity =
        selectedItemsArray[selectedItemIndex].selectedQuantity;
    }

    if (selectedItemIndex > -1 && selectedItemQuantity > 0) {
      buttonToSelect = (
        // <ButtonComponent key={'ButtonComponent' + item.id} disabled={true}>
        //   {selectedItemQuantity} In Cart
        // </ButtonComponent>
        <QuantityButtonComponent
          key={
            'QuantityButtonComponent' + selectedItemsArray[selectedItemIndex].id
          }
          selectedItem={selectedItemsArray[selectedItemIndex]}
          selectedQuantity={selectedItemQuantity}
        ></QuantityButtonComponent>
      );
    } else {
      buttonToSelect = (
        <AddToCartComponent
          key={'AddToCartComponent' + item.id}
          itemId={item.id}
        ></AddToCartComponent>
      );
    }
    return (
      <div
        key={'div' + item.id}
        className={[
          indexClasses.responsiveCol,
          indexClasses.l12,
          indexClasses.s12,
          manageItemClasses.ItemOuterWrapper
        ].join(' ')}
      >
        <div
          className={[
            indexClasses.responsiveContainer,
            manageItemClasses.ItemWrapper
          ].join(' ')}
        >
          <div className={manageItemClasses.ItemInfoStart}>
            <div
              className={[
                indexClasses.marginBottom5,
                manageItemClasses.ItemTitle
              ].join(' ')}
            >
              {item.name} - {item.quantity} {item.quantitySuffix}
            </div>
            <div
              className={[
                indexClasses.marginBottom5,
                manageItemClasses.ItemDesc
              ].join(' ')}
            >
              {item.description}
            </div>
            <PriceComponent key={'PriceComponent' + item.id}>
              {item.price}
            </PriceComponent>
          </div>
          <div className={manageItemClasses.ItemInfoEnd}>
            <div className={manageItemClasses.ItemButtonWrapper}>
              {buttonToSelect}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDisplayComponent;
