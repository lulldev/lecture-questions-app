import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Questions } from "../../api/questions/questions";
import DefaultLayout from "ui/layouts/Default";
import Modal from "ui/components/Modal";

import "./Questions.scss";

function QuestionsPage({ questions }) {
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
              описание докладаописание докладаописание докладаописание
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
        <div className="question-list">
          {questions.map((question, index) => (
            <div className="question" key={index}>
              <div className="question-author">
                От: <strong>{question.author}</strong>
              </div>
              <div className="question-text">{question.text}</div>
              <div className="question-published">5 минут назад</div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisibility(false)}
        content={
          <form className="pure-form pure-form-aligned create-question-form">
            <h2>Lets go!</h2>
            <textarea
              className="create-question-text"
              placeholder="Ваш вопрос?"
            ></textarea>
            <button
              type="submit"
              className="create-question-send pure-button button-success"
            >
              <i className="fa fa-paper-plane create-question-send-icon"></i>
              Отправить
            </button>
          </form>
        }
      />
    </DefaultLayout>
  );
}

export default withTracker(() => {
  const handle = Meteor.subscribe("Questions.all");

  return {
    questionsLoading: !handle.ready(),
    questions: Questions.find().fetch(),
  };
})(QuestionsPage);
