import React from "react";
import "./ChallengeSection.css";
import TestContainer from "./TestContainer";

const ChallengeSection = () => {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header">take a speed test now</h1>

      <TestContainer words={4} characters={14} wpm={20} />
    </div>
  );
};

export default ChallengeSection;
