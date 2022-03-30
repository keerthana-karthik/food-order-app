import React, { useEffect, Fragment } from 'react';
import indexclasses from '../../index.css';
import mainClasses from './MainContainer.css';
import PriceComponent from '../../components/Price/PriceComponent';

const HeaderSmallScreen = ({
  totalQuantity,
  totalPrice,
  onFloatingCartIconClick,
  onOpenButton
}) => {
  return (
    <Fragment>
      <header
        className={[
          mainClasses.styleBar,
          indexclasses.positionTop,
          indexclasses.displayNoneOnLarge,
          indexclasses.styleGreen,
          indexclasses.fontSize24
        ].join(' ')}
      >
        <div
          onClick={onOpenButton}
          className={[mainClasses.styleBarItem].join(' ')}
        >
          <i className={[indexclasses.fa, indexclasses.faBars].join(' ')}></i>
        </div>
        <div
          className={[
            mainClasses.smallScreenTitle,
            mainClasses.styleBarItem,
            indexclasses.letterSpacing4
          ].join(' ')}
        >
          DeepHolistix Kitchen
        </div>

        <a
          className={[mainClasses.styleBarIcons, mainClasses.cartWrapper].join(
            ' '
          )}
        >
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
          <span
            className={[
              indexclasses.styleTextWhite,
              indexclasses.fontSize15
            ].join(' ')}
          >
            <PriceComponent>{totalPrice}</PriceComponent>
          </span>
        </a>
      </header>
    </Fragment>
  );
};

export default HeaderSmallScreen;
