import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center" style={{"minHeight": "80vh"}}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
