import React from "react";

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <p>{numQuestions} question to test your React mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        lets Start
      </button>
    </div>
  );
}
