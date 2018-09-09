import React from "react";
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
import { onlyUpdateForKeys } from "recompose";

const FormWithState = compose(
  withCreateMaze,
  withFormState
)(MazeForm);

const EnchancedControls = withMoveDirections(Controls);

const Cell = onlyUpdateForKeys(["isPony", "isDomokun"])(Node);

const MazeGame = props => (
  <React.Fragment>
    <FormWithState />
    <Grid>
      {props.data.map((row, y) => (
        <Row key={y}>
          {row.map((node, x) => (
            <Cell {...node} key={x}>{`${y},${x}`}</Cell>
          ))}
        </Row>
      ))}
    </Grid>
    <EnchancedControls />
  </React.Fragment>
);

const Game = connect(
  ({
    mazeState: {
      data: { size, data, pony, domokun, endPoint }
    }
  }) => ({
    data: compose(
      splitEvery(size[0]),
      arr =>
        arr.map((node, i, arr) => ({
          walls: node,
          directions: {
            top: !node.includes("north"),
            left: !node.includes("west"),
            right: arr[i + 1] && !arr[i + 1].includes("west"),
            bottom: arr[i + 15] && !arr[i + 15].includes("north")
          },
          isPony: i === pony[0],
          isDomokun: i === domokun[0],
          isEndPoint: i === endPoint[0]
        }))
    )(data)
  })
)(MazeGame);

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Game />
  </div>
);

export default App;
