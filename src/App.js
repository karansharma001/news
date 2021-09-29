import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsMain from "./components/NewsMain";
import { Route, Switch } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.handelCategory = this.handelCategory.bind(this);

    this.state = {
      data: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://inshortsapi.vercel.app/news?category=all";
    let rawData = await fetch(url);
    let parsedData = await rawData.json();

    this.setState({ data: parsedData, loading: false });
    console.log(this.state.data.data);
  }

  handelCategory = async (category) => {
    this.setState({ loading: true, data: [] });
    let url = `https://inshortsapi.vercel.app/news?category=${category}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();

    this.setState({ data: parsedData, loading: false });
    console.log(this.state.data.data);
  };

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Navbar handelCategory={this.handelCategory} />
            <NewsMain
              newsItems={this.state.data?.data}
              loading={this.state.loading}
            />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
