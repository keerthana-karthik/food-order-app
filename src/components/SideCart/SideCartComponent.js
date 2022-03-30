import React, { Component, useState, useEffect } from 'react';
import PriceComponent from '../Price/PriceComponent';
import ListCartItems from '../ListCartItems/ListCartItems';
import indexClasses from '../../index.css';
import sideCartClasses from './SideCartComponent.css';
import { useHistory } from 'react-router-dom';

const SideCartComponent = ({
  showFloatingCart,
  selecteditemsArray,
  totalQuantity,
  totalPrice,
  onCloseSideCart
}) => {
  let sideCartWrapperClasses = [sideCartClasses.sidecartWrapper];
  const itemArray = [...selecteditemsArray];
  let cartEmptyMsg = null;
  const history = useHistory();

  if (showFloatingCart) {
    sideCartWrapperClasses = [sideCartClasses.sidecartWrapper];
  } else {
    sideCartWrapperClasses = [
      sideCartClasses.sidecartWrapper,
      indexClasses.displayNone
    ];
  }
  let isCartEmpty =
    !selecteditemsArray ||
    (selecteditemsArray && selecteditemsArray.length === 0)
      ? true
      : false;
  if (isCartEmpty) {
    cartEmptyMsg = (
      <div className={[sideCartClasses.cartEmptyMsg].join(' ')}>
        Cart is empty
      </div>
    );
  }

  const handleClick = () => {
    onCloseSideCart();
    history.push('/checkout');
  };
  return (
    <div className={sideCartWrapperClasses.join(' ')}>
      <div className={sideCartClasses.sidecartContainer}>
        <i
          onClick={onCloseSideCart}
          className={[
            indexClasses.fa,
            indexClasses.faRemove,
            indexClasses.styleButton,
            indexClasses.positionDisplayTopleft
          ].join(' ')}
        ></i>
        <header
          className={[
            sideCartClasses.cartHeader,
            indexClasses.marginTop20
          ].join(' ')}
        >
          <span>Cart</span>
          <div>{totalQuantity} item</div>
        </header>
        <div className={sideCartClasses.cartItems}>
          <ListCartItems
            selecteditemsArray={selecteditemsArray}
          ></ListCartItems>
          {cartEmptyMsg}
        </div>
        <footer className={sideCartClasses.cartFooter}>
          <div className={sideCartClasses.cartTotalSection}>
            <span
              className={
                (sideCartClasses.totalLabel, indexClasses.marginBottom20)
              }
            >
              Subtotal:
            </span>
            <span className={sideCartClasses.totalPrice}>
              <PriceComponent>{totalPrice}</PriceComponent>
            </span>
          </div>
          <button
            onClick={handleClick}
            className={sideCartClasses.buttonPrimary}
          >
            Check Out
          </button>
        </footer>
      </div>
    </div>
  );
};
export default SideCartComponent;
