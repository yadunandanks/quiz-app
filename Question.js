import React from "react";
import Options from "./Options";

export default function Question({ question, answer, dispatch }) {
  console.log(question);
  return <Options question={question} answer={answer} dispatch={dispatch} />;
}
