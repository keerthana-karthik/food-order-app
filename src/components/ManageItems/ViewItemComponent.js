import React, { Component } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import PriceComponent from '../Price/PriceComponent';
import ButtonComponent from '../Forms/Button/ButtonComponent';
import AddToCartComponent from '../Forms/AddToCart/AddToCartComponent';
import manageItemsClasses from './ManageItemsComponent.css';
import indexClasses from '../../index.css';

class ViewItemComponent extends Component {
  state = {
    itemId: 0,
    item: {}
  };
  componentDidMount() {
    let category = this.props.match.params.category;
    let itemId = this.props.match.params.id;
    if (category && itemId) {
      this.setState({ itemId: itemId });
      axios
        .get('https://trendy-north.firebaseio.com/' + category + '.json')
        .then(response => {
          for (let key in response.data) {
            if (key === itemId) {
              this.setState({ item: { ...response.data[key], id: key } });
            }
          }
        })
        .catch(error => {
          this.props.onInitItems([]);
        });
    }
  }

  componentDidUpdate(prevProps) {
    let category = this.props.match.params.category;
    let itemId = this.props.match.params.id;
    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (category && itemId) {
        this.setState({ itemId: itemId });
        axios
          .get('https://trendy-north.firebaseio.com/' + category + '.json')
          .then(response => {
            for (let key in response.data) {
              if (key === itemId) {
                this.setState({ item: { ...response.data[key], id: key } });
              }
            }
          })
          .catch(error => {
            this.props.onInitItems([]);
          });
      }
    }
  }
  // test
  getIndexInSelectedItemsArray = itemIdentifier => {
    let selectedItemIndex = -1;
    for (let index in this.props.selectedItemsArray) {
      if (this.props.selectedItemsArray[index].id === itemIdentifier) {
        selectedItemIndex = index;
      }
    }
    return selectedItemIndex;
  };
  render() {
    let itemhtml = null;
    if (this.state.item && this.state.item.imgUrl) {
      let buttonToSelect = null;
      let selectedItemIndex = this.getIndexInSelectedItemsArray(
        this.state.item.id
      );
      let selectedItemQuantity = 0;
      if (selectedItemIndex > -1) {
        selectedItemQuantity = this.props.selectedItemsArray[selectedItemIndex]
          .selectedQuantity;
      }

      if (selectedItemIndex > -1 && selectedItemQuantity > 0) {
        buttonToSelect = (
          <ButtonComponent
            key={'ButtonComponent' + this.state.item.id}
            disabled={true}
          >
            {selectedItemQuantity} In Cart
          </ButtonComponent>
        );
      } else {
        buttonToSelect = (
          <AddToCartComponent
            key={'AddToCartComponent' + this.state.item.id}
            itemId={this.state.item.id}
          ></AddToCartComponent>
        );
      }
      itemhtml = (
        <div className={manageItemsClasses.FormWrapper}>
          <div className={manageItemsClasses.FormImgSection}>
            <img
              src={this.state.item.imgUrl}
              alt="img 1"
              className={indexClasses.width100}
            ></img>
          </div>
          <div className={manageItemsClasses.FormSection}>
            <div className={manageItemsClasses.FormContent}>
              <div className={manageItemsClasses.ItemDetail}>
                <div className={manageItemsClasses.ItemDetailBrand}>
                  {this.state.item.type} - {this.state.item.material}
                </div>
              </div>
              <div className={manageItemsClasses.ItemDetail}>
                <PriceComponent key={'PriceComponent' + this.state.item.id}>
                  {this.state.item.price}
                </PriceComponent>
              </div>
              <div
                className={[
                  manageItemsClasses.ItemDetail,
                  indexClasses.marginBottom20
                ].join(' ')}
              >
                <div className={manageItemsClasses.ItemDetailDesc}>
                  {this.state.item.description}
                </div>
              </div>
              <div>{buttonToSelect}</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={manageItemsClasses.ManageItemWrapper}>
        {itemhtml}
        <AuthContext.Consumer>
          {context => (context.authenticated ? <p>Logged In</p> : null)}
        </AuthContext.Consumer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemsArray: state.itemManageReducer.items,
    selectedItemsArray: state.orderManageReducer.selectedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitItems: items => dispatch(actions.initItems(items))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewItemComponent);
