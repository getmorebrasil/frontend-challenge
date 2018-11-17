import React, { Component } from "react";
import StoreThumbnail from "../storeThumbnail/storeThumbnail";
import "./storeList.css";
import { getList } from "../store/storeService";

export default class StoreList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], sort: "default+" };
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  componentWillMount() {

    getList().then(resp => {
        if (!resp.length) {
          window.location = "#/error";
        }else{
          this.updateStoreList(resp)
        }
    });
  }

  updateStoreList(newList) {
    this.setState({ ...this.state, list: newList });
  }

  renderStores() {
    const list = this.sortStores(this.state.list, this.state.sort) || [];

    return list.map(store => {
      return (
        <StoreThumbnail
          key={store.id}
          id={store.id}
          name={store.name}
          takeback={store.takeback}
          image={store.image_blob}
        />
      );
    });
  }

  handleChangeSort(event) {
    this.setState({ ...this.state, sort: event.target.value });
  }

  sortStores(list, sort) {
    switch (sort) {
      case "name+":
        return list.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      case "name-":
        return list.sort((a, b) =>
          a.name > b.name ? -1 : b.name > a.name ? 1 : 0
        );
      case "takeback+":
        return list.sort((a, b) =>
          a.takeback > b.takeback ? -1 : b.takeback > a.takeback ? 1 : 0
        );
      case "takeback-":
        return list.sort((a, b) =>
          a.takeback > b.takeback ? 1 : b.takeback > a.takeback ? -1 : 0
        );

      default:
        return list.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    }
  }

  render() {
    return (
      <div id="storeList">
        <select
          className="custom-select filter col-xs-12 col-sm-12 col-md-3 col-lg-3"
          value={this.state.sort}
          onChange={this.handleChangeSort}
        >
          <option value="default">Order by default</option>
          <option value="name+">Order by name ASC</option>
          <option value="name-">Order by name DESC</option>
          <option value="takeback+">Order by takeback ASC</option>
          <option value="takeback-">Order by takeback DESC</option>
        </select>
        <div>{this.renderStores()}</div>
      </div>
    );
  }
}
