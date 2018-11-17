import React, { Component } from "react";
import "./store.css";
import { getStore } from "./storeService";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      rating: 0,
      takeback: 0,
      site: "",
      category: ""
    };
  }

  componentWillMount() {
    getStore(this.props.params.id).then(resp => {
      if (!Object.keys(resp).length ) {
        window.location = "#/error";
      } else {
        this.setState(
          {
            ...this.state,
            name: resp.name,
            image: resp.image_blob,
            rating: resp.rating,
            takeback: resp.takeback,
            site: resp.url,
            category: resp.category
          }
        );
      }
    });
  }

  renderCategory() {
    const category = this.state.category || [];
    return category.map((element, index) => (
      <span key={index}>| {element} |</span>
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: "400px" }}>
          <img className="card-img-top" src={this.state.image} alt="img" />
          <hr />
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <p className="card-text">
              <i className="fas fa-star"> Rating: </i>
              {this.state.rating}.
              <br />
              <i className="fas fa-money-bill-wave-alt"> Takeback: </i>
              {this.state.takeback.toFixed(2)}%.
              <br />
            </p>
          </div>

          <div className="card-body">
            Category: <br />
            <span>|{this.renderCategory()}|</span>
            <br />
            <a href="#/list" className="card-link">
              <button className="btn btn-info"> Return</button>
            </a>
            <a
              href={this.state.site}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-info"> Go to Site</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
