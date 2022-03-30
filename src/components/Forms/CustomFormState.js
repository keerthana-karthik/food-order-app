const CustomFormState = {
  customFormData: {
    textbox_1: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name"
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    selectbox_1: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "null", displayValue: "Select One" },
          { value: "1", displayValue: "One" },
          { value: "2", displayValue: "Two" },
          { value: "3", displayValue: "Three" }
        ]
      },
      value: "",
      validation: {},
      valid: true
    },
    checkbox_1: {
      elementType: "checkbox",
      elementConfig: {
        label: "Checkbox"
      },
      value: "chkbox",
      valid: true,
      checked: false
    },
    radiobutton_1: {
      elementType: "radiobutton",
      elementConfig: {
        elementName: "radiobutton",
        options: [
          { value: "1", displayValue: "One" },
          { value: "2", displayValue: "Two" },
          { value: "3", displayValue: "Three" }
        ]
      },
      selectedValue: null,
      valid: true,
      checked: false
    }
  },
  formIsValid: true,
  loading: false
};
export default CustomFormState;
