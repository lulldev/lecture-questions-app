import React from "react";

import DefaultLayout from "ui/layouts/Default";

import "./Voting.scss";

export default class Voting extends React.Component {
  render() {
    return (
      <DefaultLayout>
        {/* <div className="voting">
          <h1 className="voting-head">Доклады</h1>
          <div className="lecture-list">
            <div className="lecture">
              <img
                className="lecture-image"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <div className="lecture-about">
                <div className="lecture-title">Доклад #1</div>
                <div className="lecture-description">
                  <span className="lecture-about-author">Фамилия или имя</span>{" "}
                  -  описание докладаописание докладаописание докладаописание докладаописание доклада 
                </div>
              </div>
              <div className="lecture-vote"></div>
            </div>
          </div>
        </div> */}
      </DefaultLayout>
    );
  }
}
