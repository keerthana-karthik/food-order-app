import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './QuantityButtonComponent.css';

class QuantityButtonComponent extends Component {
  state = {
    quantityDisplayValue: this.props.selectedItem.selectedQuantity
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.quantityDisplayValue !== nextProps.selectedItem.selectedQuantity
    ) {
      return {
        quantityDisplayValue: nextProps.selectedItem.selectedQuantity
      };
    }
    // Return null to indicate no change to state.
    return null;
  }
  render() {
    // test quantityDisplay after 3 onIncrementBtn and 1 onDecrementBtn
    const onDecrementBtn = event => {
      let newQuantityDisplayValue = this.state.quantityDisplayValue - 1;
      this.setState({ quantityDisplayValue: newQuantityDisplayValue });
      this.props.updateSelectedItem({
        selectedId: this.props.selectedItem.id,
        selectedQuantity: newQuantityDisplayValue
      });
    };
    const onIncrementBtn = () => {
      let newQuantityDisplayValue = this.state.quantityDisplayValue + 1;
      this.setState({ quantityDisplayValue: newQuantityDisplayValue });
      this.props.updateSelectedItem({
        selectedId: this.props.selectedItem.id,
        selectedQuantity: newQuantityDisplayValue
      });
    };
    const updateQuantity = event => {
      let newQuantityDisplayValue = event.target.value;
      this.setState({ quantityDisplayValue: newQuantityDisplayValue });
      this.props.updateSelectedItem({
        selectedId: this.props.selectedItem.id,
        selectedQuantity: newQuantityDisplayValue
      });
    };

    return (
      <div className={classes.quantityPicker}>
        <button className={classes.decrementBtn} onClick={onDecrementBtn}>
          -
        </button>
        <div>
          <input
            readOnly
            id="quantityDisplay"
            type="number"
            className={classes.quantityDisplay}
            value={this.state.quantityDisplayValue}
            maxLength="1"
          />
        </div>
        <button className={classes.incrementBtn} onClick={onIncrementBtn}>
          +
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedItemsArray: state.orderManageReducer.selectedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateSelectedItem: item => dispatch(actions.updateSelectedItem(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuantityButtonComponent);
