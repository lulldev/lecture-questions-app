import React, { useState } from "react";
import moment from "moment";
import { withTracker } from "meteor/react-meteor-data";
import { Questions } from "api/questions/collection";
import classnames from "classnames";

import DefaultLayout from "ui/layouts/Default";
import Modal from "ui/components/Modal";
import QuestionForm from "ui/components/QuestionForm";

import "./Questions.scss";

function QuestionsPage({ questions, isQuestionsLoaded }) {
  const [isModalVisible, setModalVisibility] = useState(false);
  console.log(questions);
  return (
    <DefaultLayout>
      <div className="questions">
        <div className="lecture">
          <img
            className="lecture-image"
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
          <div className="lecture-about">
            <div className="lecture-title">Доклад #1</div>
            <div className="lecture-description">
              <span className="lecture-about-author">Фамилия или имя</span> -
              описание доклада описание доклада описание докладаописание
            </div>
            <div className="start-question">
              <button
                className="pure-button start-question-button"
                onClick={() => setModalVisibility(true)}
              >
                <i className="fa fa-paper-plane create-question-send-icon"></i>
                Задать вопрос
              </button>
            </div>
          </div>
        </div>

        {isQuestionsLoaded ? (
          questions.length === 0 ? (
            "Ваши вопросы по докладу?"
          ) : (
            <div className="question-list">
              {questions.map((question, index) => (
                <div
                  className={classnames(
                    "question",
                    question.userId === Meteor.userId() && "my"
                  )}
                  key={index}
                >
                  <div className="question-author">
                    От: <strong>{question.author}</strong>
                  </div>
                  <div className="question-text">{question.text}</div>
                  <div className="question-published">
                    {moment(question.publishedAt).fromNow()}
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          "Загрузка..."
        )}
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisibility(false)}
        content={
          <QuestionForm
            onSubmit={({ question }) => {
              Meteor.call(
                "Questions.add",
                { text: question, author: Meteor.user().profile.name },
                () => {
                  setModalVisibility(false);
                }
              );
            }}
          />
        }
      />
    </DefaultLayout>
  );
}

export default withTracker(() => {
  const handle = Meteor.subscribe("Questions.all");

  return {
    isQuestionsLoaded: handle.ready(),
    questions: Questions.find().fetch(),
  };
})(QuestionsPage);
