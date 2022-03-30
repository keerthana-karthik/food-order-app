import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import ButtonComponent from '../Button/ButtonComponent';

class AddToCartComponent extends Component {
  // test
  onAddToCart = itemIdentifier => {
    let selectedItem = {};
    for (let index in this.props.itemsArray) {
      if (this.props.itemsArray[index].id === itemIdentifier) {
        selectedItem = {
          ...this.props.itemsArray[index]
        };
        this.props.addSelectedItem(selectedItem);
      }
    }
  };
  render() {
    return (
      <ButtonComponent
        key={'ButtonComponent' + this.props.itemId}
        clicked={event => this.onAddToCart(this.props.itemId)}
      >
        +
      </ButtonComponent>
    );
  }
}
AddToCartComponent.propTypes = {
  itemId: PropTypes.string
};
const mapStateToProps = state => {
  return {
    itemsArray: state.itemManageReducer.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addSelectedItem: item => dispatch(actions.addSelectedItem(item))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToCartComponent);
