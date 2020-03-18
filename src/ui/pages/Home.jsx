import React from "react";
import { Link } from "react-router-dom";

export default class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <Link to="/voting">Go to voting</Link>
        <button
          onClick={() => Meteor.loginWithGoogle(error => console.log(error))}
          className="pure-button"
        >
          Login with Google
        </button>
      </React.Fragment>
    );
  }
}
