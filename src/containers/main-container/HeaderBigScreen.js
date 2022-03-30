import React, { useEffect, Fragment } from 'react';
import indexclasses from '../../index.css';
import PriceComponent from '../../components/Price/PriceComponent';
import mainClasses from './MainContainer.css';

const HeaderBigScreen = ({
  totalQuantity,
  totalPrice,
  onFloatingCartIconClick
}) => {
  return (
    <Fragment>
      <header
        className={[
          indexclasses.displayNoneOnSmall,
          indexclasses.responsiveContainer,
          indexclasses.fontSize24
        ].join(' ')}
      >
        <p className={mainClasses.cartWrapper}>
          <span
            onClick={onFloatingCartIconClick}
            data-count={totalQuantity}
            className={indexclasses.faStack}
          >
            <i
              className={[
                indexclasses.fa,
                indexclasses.faShoppingCart,
                indexclasses.faStack2x
              ].join(' ')}
            ></i>
          </span>
          <span className={indexclasses.fontSize18}>
            <PriceComponent>{totalPrice}</PriceComponent>
          </span>
        </p>
      </header>
    </Fragment>
  );
};

export default HeaderBigScreen;
