import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <>
      <div className="col mx-3">
        <div className="card shadow-sm" style={{"width": "18rem"}}>
          <img src={this.props.img} className="card-img-top" style={{"height": "200px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">
              {this.props.desc}...
            </p>
            <a href={this.props.more} className="btn btn-primary">
              Read Article
            </a>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
