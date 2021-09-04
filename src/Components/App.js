import React from "react";
import "./App.css";
import ChallengeSection from "./ChallengeSection";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";

const TotalTime = 60;
//const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
  state = {
    selectedParagraph: "Hello World",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  };

  componentDidMount() {
    // fetch(serviceUrl)
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({ selectedParagraph: data });
    //   });

    const selectedParagraphArray = this.state.selectedParagraph.split("");
    console.log("splitted array - ", selectedParagraphArray);
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ testInfo });
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }
  };

  render() {
    console.log("Test Info: ", this.state.testInfo);
    return (
      <div className="app">
        <Nav />
        <Landing />

        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
