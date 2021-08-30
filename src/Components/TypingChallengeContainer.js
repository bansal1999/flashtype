import React from "react";
import ChallengeDetailsCard from "./ChallengeDetailsCard";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({ words, characters, wpm }) => {
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

      <div className="typewriter-container">
        <p>This the real challenge</p>
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
