import React from "react";
import { Link } from "react-router-dom";

export default class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <Link to="/voting">Go to voting</Link>
      </React.Fragment>
    );
  }
}
