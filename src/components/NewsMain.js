import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class NewsMain extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }} className="container">
        {this.props.loading && <Spinner />}
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 d-flex justify-content-center align-items-center">
            {this.props.newsItems?.map((e) => {
              return (
                <NewsItem
                  img={e.imageUrl}
                  title={e.title.slice(0, 70)}
                  desc={e.content.slice(0, 180)}
                  more={e.readMoreUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsMain;
