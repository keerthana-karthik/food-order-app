
import { getCategoriesMap } from "../../helpers/CatalogHelper";
const categories = getCategoriesMap().map(category => {
  return (
    { value: category.key, displayValue: category.value}
  )
});
const ItemFormState = {
    formData: {
      category: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "null", displayValue: "Select One" },
            ...categories
          ]
        },
        value: "",
        validation: {},
        valid: true
      },
      material: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Material"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      type: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Type"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      imgUrl: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Image Url"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      price: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Price"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Description"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: true,
    loading: false
  };
  export default ItemFormState;
  