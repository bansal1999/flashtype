import React from "react";
import "./TestLetter.css";

//   let statusClass;

//   if (status === "correct") {
//     statusClass = "test-letter-correct";
//   } else if (status === "incorrect") {
//     statusClass = "test-letter-incorrect";
//   } else {
//     statusClass = "test-letter-not-attempted";
//   }

const TestLetter = ({ individualLetterInfo }) => {
  const statusClassName = {
    correct: "test-letter-correct",
    incorrect: "test-letter-incorrect",
    notAttempted: "test-letter-not-attempted",
  }[individualLetterInfo.status];

  return (
    <span className={`test-letter ${statusClassName}`}>
      {individualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
