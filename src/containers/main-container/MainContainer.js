import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { getCategoriesMap } from '../../helpers/CatalogHelper';
import Sidebar from './Sidebar';
import HeaderSmallScreen from './HeaderSmallScreen';
import HeaderBigScreen from './HeaderBigScreen';
import SideCartComponent from '../../components/SideCart/SideCartComponent';
import ListItems from '../ListItems/ListItems';
import Payment from '../../components/StaticContent/Payment';
import FAQ from '../../components/StaticContent/FAQ';
import AboutMeComponent from '../../components/StaticContent/AboutMeComponent';
import FoodDeliveryDetails from '../../components/StaticContent/FoodDeliveryDetails';
import Checkout from '../Checkout/Checkout';
import ViewItemComponent from '../../components/ManageItems/ViewItemComponent';
import CustomFormComponent from '../../components/Forms/CustomFormComponent';
import PageNotFoundComponent from '../../components/PageNotFound/PageNotFoundComponent';
import indexclasses from '../../index.css';
import mainClasses from './MainContainer.css';

class MainContainer extends Component {
  state = {
    showFloatingCart: false,
    category: getCategoriesMap()[0].key
  };
  componentDidMount() {}
  openSideBar = () => {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('navOverlay').style.display = 'block';
  };

  closeSideBar = () => {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('navOverlay').style.display = 'none';
  };
  closeSideCart = () => {
    document.getElementById('cartOverlay').style.display = 'none';
    this.setState({ showFloatingCart: false });
  };
  onFloatingCartIconClick = () => {
    const localShowFloatingCart = this.state.showFloatingCart;
    this.setState({ showFloatingCart: !localShowFloatingCart });

    document.getElementById('cartOverlay').style.display = 'block';
  };
  render() {
    return (
      <div className={mainClasses.bodyWrapper}>
        {/* <!-- Sidebar/menu --> */}
        <Sidebar onCloseButton={this.closeSideBar}></Sidebar>
        {/* <!-- Top menu on small screens --> */}
        <HeaderSmallScreen
          totalQuantity={this.props.totalQuantity}
          totalPrice={this.props.totalPrice}
          onFloatingCartIconClick={this.onFloatingCartIconClick}
          onOpenButton={this.openSideBar}
        ></HeaderSmallScreen>

        {/* // <!-- Overlay effect when opening sidebar on small screens --> */}
        <div
          className={[
            indexclasses.positionOverlay,
            indexclasses.cursorPointer
          ].join(' ')}
          onClick={this.closeSideBar}
          id="navOverlay"
        ></div>
        <div
          className={[
            indexclasses.positionOverlay,
            indexclasses.cursorPointer
          ].join(' ')}
          onClick={this.closeSideCart}
          id="cartOverlay"
        ></div>

        {/* // <!-- !PAGE CONTENT! --> */}
        <div className={mainClasses.pageContentWrapper}>
          <div
            className={[
              indexclasses.displayNoneOnLarge,
              mainClasses.marginTop83
            ].join(' ')}
          ></div>
          <HeaderBigScreen
            totalQuantity={this.props.totalQuantity}
            totalPrice={this.props.totalPrice}
            onFloatingCartIconClick={this.onFloatingCartIconClick}
            onOpenButton={this.openSideBar}
          ></HeaderBigScreen>
          <div className={[indexclasses.responsiveContainer].join(' ')}>
            <Switch>
              <Route path={'/payment'} exact component={Payment} />
              <Route path={'/faq'} exact component={FAQ} />
              <Route path={'/aboutUs'} exact component={AboutMeComponent} />
              <Route
                path={'/foodDeliveryDetails'}
                exact
                component={FoodDeliveryDetails}
              />
              <Route path={'/checkout'} exact component={Checkout} />
              <Route
                path={'/viewItem/:' + this.state.category + '/:id'}
                exact
                component={ViewItemComponent}
              />
              <Route path={'/items' + '/:id'} exact component={ListItems} />
              <Route path="/form" exact component={CustomFormComponent} />
              <Redirect from="/" to={'/items/' + this.state.category} />
              <Route component={PageNotFoundComponent} />
            </Switch>
          </div>
          <SideCartComponent
            showFloatingCart={this.state.showFloatingCart}
            selecteditemsArray={this.props.selecteditemsArray}
            totalQuantity={this.props.totalQuantity}
            totalPrice={this.props.totalPrice}
            onCloseSideCart={this.closeSideCart}
          ></SideCartComponent>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemsArray: state.itemManageReducer.items,
    selecteditemsArray: state.orderManageReducer.selectedItems,
    totalQuantity: state.orderManageReducer.totalQuantity,
    totalPrice: state.orderManageReducer.totalPrice
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitItems: items => dispatch(actions.initItems(items)),
    setSelectedItems: items => dispatch(actions.setSelectedItems(items))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
