import React, { Component } from "react";
import logo from "./logo.svg";
import Grid from "./components/Grid";
import Row from "./components/Row";
import Node from "./components/Node";
import Controls from "./components/Controls";
import MazeForm from "./components/MazeForm";
import { connect } from "react-redux";
import { splitEvery, compose } from "ramda";
import withCreateMaze from "./HOC/withCreateMaze";
import withMoveDirections from "./HOC/withMoveDirections";
import withFormState from "./HOC/withFormState";

const FormWithState = compose(
  withCreateMaze,
  withFormState
)(MazeForm);

const EnchancedApp = connect(state => ({
  data: splitEvery(
    state.mazeState.data.size[0],
    state.mazeState.data.data
      .map((n, i) => (i === state.mazeState.data.pony[0] ? [...n, "pony"] : n))
      .map(
        (n, i) =>
          i === state.mazeState.data.domokun[0] ? [...n, "domokun"] : n
      )
      .map(
        (n, i) => (i === state.mazeState.data.endPoint[0] ? [...n, "exit"] : n)
      )
  )
}));

const EnchancedControls = withMoveDirections(Controls);

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
        <FormWithState />

        <Grid>
          {this.props.data.map((row, y) => (
            <Row key={y}>
              {row.map((node, x) => (
                <Node node={node} key={x}>{`${y},${x}`}</Node>
              ))}
            </Row>
          ))}
        </Grid>
        <EnchancedControls />
      </div>
    );
  }
}

export default EnchancedApp(App);
