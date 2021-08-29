import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div className="results-container">
        <p>
          <b>characters: {characters}</b>
        </p>
        <p>
          <b>words: {words}</b>
        </p>
        <p>
          <b>Speed: {wpm} wpm</b>
        </p>
      </div>

      <div>
        <button className="end-buttons start-again-btn">Re-try</button>

        <button
          onClick={() => {
            window.open("http://www.facebook.com/share/sharer.php");
          }}
          className="end-buttons share-btn"
        >
          facebook
        </button>

        <button
          onClick={() => {
            window.open("http://www.twitter.com");
          }}
          className="end-buttons tweet-btn"
        >
          twitter
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
