import React, { Component } from 'react';
import { connect } from 'react-redux';
import formState from './CheckoutFormState';
import FormsHelper from '../../components/Forms/FormsHelper';
import ListCartItems from '../../components/ListCartItems/ListCartItems';
import axios from 'axios';
import { createOrder } from '../../helpers/network';
import * as actions from '../../store/actions/index';
import FormElementComponent from '../../components/Forms/FormElement/FormElementComponent';
import ButtonComponent from '../../components/Forms/Button/ButtonComponent';
import manageItemsClasses from '../../components/ManageItems/ManageItemsComponent.css';
import {
  getCategoriesMap,
  getCategoryDisplayName
} from '../../helpers/CatalogHelper';
import indexClasses from '../../index.css';

class Checkout extends Component {
  state = formState;
  timestamp = new Date().getTime();
  formElementChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = FormsHelper.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      formData: updatedForm,
      formIsValid: formIsValid,
      formTouched: true,
      dataSubmitedSuccess: false
    });
  };

  restructuredArray = selecteditemsArray => {
    let itemArrayGroupByCategory = {};
    getCategoriesMap().forEach(category => {
      selecteditemsArray.forEach(item => {
        if (item.category === category.key) {
          const categoryDisplayName = getCategoryDisplayName(item.category);
          const selectedItem = {
            dayOfWeek: categoryDisplayName,
            itemName: item.name,
            itemId: item.id,
            itemPrice: item.price,
            itemQuantity: item.quantity,
            itemQuantitySuffix: item.quantitySuffix,
            priceForSelectedQuantity: item.priceForSelectedQuantity,
            selectedQuantity: item.selectedQuantity
          };
          if (itemArrayGroupByCategory[category.key]) {
            itemArrayGroupByCategory[category.key].push(selectedItem);
          } else {
            itemArrayGroupByCategory[category.key] = [];
            itemArrayGroupByCategory[category.key].push(selectedItem);
          }
        }
      });
    });
    return itemArrayGroupByCategory;
  };

  submitHandler = async event => {
    event.preventDefault();
    console.log(this.props.selectedItemsArray);

    let formData = this.state.formData;
    let itemArrayGroupByCategory = this.restructuredArray(
      this.props.selectedItemsArray
    );
    let postBody = {
      [this.timestamp]: {
        orderNumber: this.timestamp,
        timestamp: this.timestamp,
        customerName: formData.name.value,
        customerPhone: formData.phone.value,
        whenPickup: formData.question1.value,
        otherComments: formData.question2.value,
        orderedItems: itemArrayGroupByCategory,
        totalQuantity: this.props.totalQuantity,
        totalPrice: this.props.totalPrice
      }
    };
    const response = await createOrder(postBody);
    if (response) {
      this.state.dataSubmitedSuccess = true;
      this.props.deleteAllSelectedItems();
    }
  };
  render() {
    let formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }

    let form = (
      <form onSubmit={this.submitHandler} autocomplete="on">
        {formElementsArray.map(formElement => (
          <FormElementComponent
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event =>
              this.formElementChangedHandler(event, formElement.id)
            }
          />
        ))}
        <ButtonComponent
          disabled={
            (this.props.selectedItemsArray &&
              this.props.selectedItemsArray.length < 1) ||
            !this.state.formIsValid ||
            !this.state.formTouched
          }
        >
          Submit
        </ButtonComponent>
      </form>
    );
    return (
      <div className={manageItemsClasses.ManageItemWrapper}>
        {this.state.dataSubmitedSuccess && (
          <div className={manageItemsClasses.FormWrapper}>
            <div className={manageItemsClasses.FormSection}>
              <h3>Hurray!</h3>
              <h4>We got your order.</h4>
              <h6>Your Order Number is: {this.timestamp}</h6>
              <br></br>
              <br></br>
              <h5>
                You will **not be** receiving order confirmation by message or
                email. We apologize for that.
              </h5>
              <br></br>
            </div>
          </div>
        )}
        {!this.state.dataSubmitedSuccess && (
          <div className={manageItemsClasses.FormWrapper}>
            <div className={manageItemsClasses.FormSection}>
              <h2>Pickup / Delivery</h2>
              <br></br>
              <div>
                <i>
                  * Orders need to placed by 9pm for pickup/delivery the next
                  day ​Pickup/Delivery after 10am
                </i>
                <br></br>
              </div>
              <br></br>
              <br></br>
              {form}
            </div>
          </div>
        )}
        {this.props.selectedItemsArray &&
          this.props.selectedItemsArray.length > 0 && (
            <div className={manageItemsClasses.ReviewOrderSection}>
              <div className={manageItemsClasses.ReviewOrderTitle}>
                Review Order
              </div>
              <ListCartItems
                selecteditemsArray={this.props.selectedItemsArray}
              ></ListCartItems>
            </div>
          )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedItemsArray: state.orderManageReducer.selectedItems,
    totalQuantity: state.orderManageReducer.totalQuantity,
    totalPrice: state.orderManageReducer.totalPrice
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteAllSelectedItems: item => dispatch(actions.deleteAllSelectedItems())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
