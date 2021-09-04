import React from "react";
import ChallengeDetailsCard from "./ChallengeDetailsCard";
import TypingChallenge from "./TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details section */}

      <div className="details-container">
        {/* Words Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* Characters Used */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* Speed */}
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>

      {/* The REAL CHALLENGE  */}
      <div className="typewriter-container">
        <TypingChallenge
          testInfo={testInfo}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
