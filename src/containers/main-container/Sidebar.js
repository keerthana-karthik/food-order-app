import React, { useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategoriesMap } from '../../helpers/CatalogHelper';
import indexclasses from '../../index.css';
import mainClasses from './MainContainer.css';

const Sidebar = ({ onCloseButton }) => {
  const onNavLinkClick = event => {
    onCloseButton();
  };

  const categories = getCategoriesMap().map(category => {
    return (
      <NavLink
        key={'NavLink' + category.key}
        to={'/items/' + category.key}
        onClick={onNavLinkClick}
        className={mainClasses.styleBarItem}
        activeClassName={mainClasses.active}
      >
        {category.value}
      </NavLink>
    );
  });
  return (
    <Fragment>
      <nav
        className={[mainClasses.styleSidebar, mainClasses.styleBarBlock].join(
          ' '
        )}
        id="mySidebar"
      >
        <div
          className={[
            indexclasses.responsiveContainer,
            indexclasses.positionDisplayContainer,
            indexclasses.paddingTopBottom16
          ].join(' ')}
        >
          <i
            onClick={onCloseButton}
            className={[
              indexclasses.fa,
              indexclasses.faRemove,
              indexclasses.displayNoneOnLarge,
              indexclasses.styleButton,
              indexclasses.positionDisplayTopright
            ].join(' ')}
          ></i>
          <div className={indexclasses.letterSpacing4}>
            <b>
              <img
                src="https://res.cloudinary.com/imagesforwebpage/image/upload/v1626393168/Holistix_Kitchen_vmlmmd.png"
                className={mainClasses.imgLogo}
              ></img>
              <br />
              Holistix Kitchen
            </b>
          </div>
        </div>
        <div className={mainClasses.styleSidebarLinkWrapper}>
          <div className={indexclasses.marginBottom50}> {categories}</div>

          <NavLink
            key={'NavLinkaboutme'}
            to={'/aboutUs'}
            className={mainClasses.styleBarItem}
            activeClassName={mainClasses.active}
          >
            About Us
          </NavLink>
          <NavLink
            key={'NavLinkaboutme'}
            to={'/payment'}
            className={mainClasses.styleBarItem}
            activeClassName={mainClasses.active}
          >
            Payment
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
