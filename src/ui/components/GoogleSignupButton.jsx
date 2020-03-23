import React from "react";

import "./GoogleSignupButton.scss";

function GoogleSignupButton({onClick, text}) {
  return (
    <button className="google-signup-button" onClick={onClick}>
      <i className="fa fa-google fa-fw"></i>
      {text}
    </button>
  );
}

export default GoogleSignupButton;
