import React from "react";
import { Redirect } from "react-router-dom";

import DefaultLayout from "ui/layouts/Default";
import GoogleSignupButton from "ui/components/GoogleSignupButton";

import "./Home.scss";

export default class Home extends React.Component {
  render() {
    if (Meteor.userId()) {
      return <Redirect to="/questions" />;
    }

    return (
      <DefaultLayout>
        <div className="home-splash">
          <h1 className="home-splash-head">Задай вопрос по докладу!</h1>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <GoogleSignupButton
                text="Войти через Google"
                onClick={() =>
                  Meteor.loginWithGoogle((error) => {
                    if (!error) {
                      window.location.href = "/questions";
                    }
                  })
                }
              />
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
