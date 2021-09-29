import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    const { handelCategory } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 position-fixed top-0 p-2" style={{"zIndex" : "4"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              ShortNews
            </a>
            <a
              className="navbar-toggler"
              type="a"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => handelCategory("all")}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => handelCategory("world")}
                  >
                    world
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-primary m-2"
                    onClick={()=> handelCategory("business")}
                  >
                    Business
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-primary m-2"
                    onClick={()=> handelCategory("Sports")}
                  >
                    Sports
                  </button>
                </li>
              </ul>
              <div className="d-flex navbar-text">
               Read the top headlines.
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
