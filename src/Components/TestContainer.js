import React from "react";
import "./TestContainer.css";
import TryAgain from "./TryAgain";
import TypingChallengeContainer from "./TypingChallengeContainer";

const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className="test-container">
      <div data-aos="fade-up" className="typing-challenge-cont">
        <TypingChallengeContainer
          words={words}
          characters={characters}
          wpm={wpm}
        />
      </div>

      <div className="try-again-container">
        <h1>This is try again</h1>
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>
    </div>
  );
};

export default TestContainer;
