import React from "react";
import "./App.css";
import ChallengeSection from "./ChallengeSection";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection/>
        <Footer />
       
      </div>
    );
  }
}

export default App;
