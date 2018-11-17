import React, { Component } from "react";
import "./storeThumbnail.css";
export default class StoreThumbnail extends Component {

  render() {
    return (
      <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <img
          className="card-img-top"
          src={this.props.image}
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>       
          <h6>{this.props.takeback.toFixed(2)}% of takeback</h6>
          <a href={'#/store/'+this.props.id} className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  }
}
