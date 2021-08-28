import React from "react";
import "./App.css";
import Landing from "./Landing";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <Landing/>
      </div>
    );
  }
}

export default App;
