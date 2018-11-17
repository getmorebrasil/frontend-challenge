import React from "react";
import Sorry from './sorry.png'
import './error.css'
export default () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img src={Sorry} alt='sorry'/>
          </div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">          
            <h1>Oh Sorry!</h1>
            <h2>Some network error has occurred, please come back later.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
