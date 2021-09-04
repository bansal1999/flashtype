import React from "react";
import "./TestContainer.css";
import TryAgain from "./TryAgain";
import TypingChallengeContainer from "./TypingChallengeContainer";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <TypingChallengeContainer
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <h1>This is try again</h1>
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
