import React, { Component } from 'react';
import formState from './ItemFormState';
import FormsHelper from '../Forms/FormsHelper';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import FormElementComponent from '../Forms/FormElement/FormElementComponent';
import ButtonComponent from '../Forms/Button/ButtonComponent';
import manageItemsClasses from './ManageItemsComponent.css';
import indexClasses from '../../index.css';

class ManageItemsComponent extends Component {
  state = formState;
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
      formTouched: true
    });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state.formData);

    let formData = this.state.formData;
    let postBody = {
      category: formData.category.value,
      material: formData.material.value,
      type: formData.type.value,
      imgUrl: formData.imgUrl.value,
      price: formData.price.value,
      description: formData.description.value
    };
    axios
      .post(
        'https://trendy-north.firebaseio.com/' + postBody.category + '.json',
        postBody
      )
      .then(response => {
        this.props.history.push('/items/' + postBody.category);
      });
  };
  render() {
    let formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    let imgForItem = null;
    if (this.state.formData.imgUrl.value) {
      imgForItem = (
        <img
          src={this.state.formData.imgUrl.value}
          alt="img 1"
          className={indexClasses.width100}
        ></img>
      );
    }

    let form = (
      <form onSubmit={this.submitHandler}>
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
          disabled={!this.state.formIsValid || !this.state.formTouched}
        >
          Submit
        </ButtonComponent>
      </form>
    );
    return (
      <div className={manageItemsClasses.ManageItemWrapper}>
        <div className={manageItemsClasses.FormWrapper}>
          <div className={manageItemsClasses.FormImgSection}>{imgForItem}</div>
          <div className={manageItemsClasses.FormSection}>
            <h3>Add</h3>
            {form}
          </div>
        </div>
      </div>
    );
  }
}

export default ManageItemsComponent;
