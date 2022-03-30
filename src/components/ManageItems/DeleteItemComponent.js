import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ButtonComponent from '../Forms/Button/ButtonComponent';

class DeleteItemComponent extends Component {
  onDeleteItemFromCatalog = (category, itemIdentifier) => {
    axios
      .delete(
        'https://trendy-north.firebaseio.com/' +
          category +
          '/' +
          itemIdentifier +
          '.json'
      )
      .then(response => {
        this.props.history.push('/manageItems/' + category);
        // <Redirect to={'/items/'+category} />
      });
  };
  render() {
    return (
      <ButtonComponent
        key={'ButtonComponent' + this.props.itemId}
        clicked={event =>
          this.onDeleteItemFromCatalog(this.props.category, this.props.itemId)
        }
      >
        Delete
      </ButtonComponent>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemsArray: state.itemManageReducer.items
  };
};
export default withRouter(connect(mapStateToProps)(DeleteItemComponent));
