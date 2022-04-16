import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { fetchMenuList } from '../../helpers/network';
import { getCategoryDisplayName } from '../../helpers/CatalogHelper';
import ItemDisplayComponent from '../../components/ItemDisplayComponent/ItemDisplayComponent';
import indexClasses from '../../index.css';

class ListItems extends Component {
  state = {
    dateForDayOfWeek: new Date()
  };
  fetchItems = async () => {
    let category = this.props.match.params.id;
    let fetchedItems = [];
    const res = await fetchMenuList(category);

    for (let key in res) {
      if (key != 'dateForDayOfWeek') {
        fetchedItems.push({
          ...res[key],
          category: category,
          id: category + key
        });
      } else {
        this.setState({ dateForDayOfWeek: new Date(res[key]) });
      }
    }
    if (fetchedItems && fetchedItems.length > 0) {
      this.props.onInitItems(fetchedItems);
    }
  };
  componentDidMount() {
    this.fetchItems();
  }
  componentDidUpdate(prevProps) {
    let category = this.props.match.params.id;
    if (category !== prevProps.match.params.id) {
      this.fetchItems();
    }
  }
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
    const categoryDisplayName = getCategoryDisplayName(
      this.props.match.params.id
    );
    const itemArray = [...this.props.itemsArray];

    return (
      <div
        className={[
          indexClasses.responsiveContainer,
          indexClasses.textLeft
        ].join(' ')}
      >
        <header
          className={[
            indexClasses.responsiveContainer,
            indexClasses.fontSize24,
            indexClasses.displayFlex
          ].join(' ')}
        >
          <div id="pageTitle" className={[indexClasses.marginAuto].join(' ')}>
            {categoryDisplayName}
            {/* {' - '}
            {new Date(this.state.dateForDayOfWeek).toLocaleDateString()} */}
          </div>
        </header>
        <div className={indexClasses.responsiveRow}>
          {itemArray.map(item => (
            <ItemDisplayComponent
              key={'ItemDisplayComponent' + item.id}
              item={item}
              selectedItemsArray={this.props.selectedItemsArray}
              getIndexInSelectedItemsArray={this.getIndexInSelectedItemsArray}
            ></ItemDisplayComponent>
          ))}
        </div>
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
    onInitItems: items => dispatch(actions.initItems(items)),
    addSelectedItem: item => dispatch(actions.addSelectedItem(item)),
    setSelectedItems: items => dispatch(actions.setSelectedItems(items))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
