import React from "react";
import "./ChallengeSection.css";
import TestContainer from "./TestContainer";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header">Take a speed test now</h1>

      <TestContainer
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
      />

    </div>
  );
};

export default ChallengeSection;
