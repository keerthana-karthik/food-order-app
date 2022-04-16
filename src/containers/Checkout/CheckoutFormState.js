import { getCategoriesMap } from '../../helpers/CatalogHelper';
const categories = getCategoriesMap().map(category => {
  return { value: category.key, displayValue: category.value };
});
const CheckoutFormState = {
  formData: {
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: '* Name',
        name: 'fname'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    phone: {
      elementType: 'input',
      elementConfig: {
        type: 'tel',
        placeholder: '* Phone Number (Format: 1234567890)',
        name: 'phone',
        pattern: '[0-9]{10}'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    question1: {
      elementType: 'textarea',
      elementConfig: {
        rows: '1',
        placeholder:
          'When do you want to pickup? (Ex: Pick up Friday + Saturday items on Saturday and Sunday items on Sunday)',
        name: 'question1'
      },
      value: '',
      valid: true,
      touched: false
    },
    question2: {
      elementType: 'textarea',
      elementConfig: {
        rows: '1',
        placeholder: 'Any Comments for us? (Optional)',
        name: 'question2'
      },
      value: '',
      valid: true,
      touched: false
    }
  },
  formIsValid: true,
  loading: false
};
export default CheckoutFormState;
