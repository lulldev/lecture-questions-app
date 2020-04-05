import React, { useState } from "react";

import "./QuestionForm.scss";

function QuestionForm({ onSubmit }) {
  const [question, changeQuestion] = useState(null);
  return (
    <form
      className="pure-form pure-form-aligned question-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (question.length >= 10 && onSubmit) {
          onSubmit({ question });
        }
      }}
    >
      <h2>Lets go!</h2>
      <textarea
        className="question-text"
        placeholder="Ваш вопрос?"
        onChange={(event) => changeQuestion(event.target.value)}
      ></textarea>
      {question && question.length < 10 && (
        <div className="question-hint">
          Введите текст не менее чем 10 символов
        </div>
      )}
      <button
        type="submit"
        className="question-send pure-button button-success"
      >
        <i className="fa fa-paper-plane create-question-send-icon"></i>
        Отправить
      </button>
    </form>
  );
}

export default QuestionForm;
