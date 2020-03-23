import React from "react";

import DefaultLayout from "ui/layouts/Default";
import GoogleSignupButton from "ui/components/GoogleSignupButton";

import "./Home.scss";

export default class HelloWorld extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="home-splash">
          <h1 className="home-splash-head">
            Проголосуй за понравившейся доклад!
          </h1>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <GoogleSignupButton
                text="Войти через Google и проголосовать"
                onClick={() =>
                  Meteor.loginWithGoogle(error => console.log(error))
                }
              />
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
