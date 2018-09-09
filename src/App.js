import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid";
import Row from "./components/Row";
import Node from "./components/Node";

const gridData = [
  [["west", "north", "pony"], ["west", "north"], ["north"]],
  [["west"], [], ["north"]],
  [["west"], ["north"], ["north", "exit"]]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid>
          {gridData.map((row, y) => (
            <Row>
              {row.map((node, x) => (
                <Node node={node}>{`${y},${x}`}</Node>
              ))}
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
