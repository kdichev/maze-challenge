import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid";
import Row from "./components/Row";
import Node from "./components/Node";
import Controls from "./components/Controls";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { withStateHandlers } from "recompose";
import { connect } from "react-redux";
import { createMaze } from "./resources/maze";
import { getMaze } from "./resources/mazeState";
import { movePony } from "./resources/move";
import { splitEvery } from "ramda";

const gridData = [
  [["west", "north", "pony"], ["west", "north"], ["north"]],
  [["west"], [], ["north"]],
  [["west"], ["north"], ["north", "exit"]]
];

const FormWithState = withStateHandlers(
  props => ({ values: { width: 15, height: 15, difficulty: 0 } }),
  {
    onChange: (state, props) => e => ({
      ...state,
      values: { ...state.values, [e.target.name]: e.target.value }
    })
  }
)(({ onChange, values, onSubmit }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      onSubmit(values);
    }}
  >
    <TextField
      name="name"
      placeholder="Pony name"
      type="text"
      required
      onChange={onChange}
    />
    <TextField
      name="width"
      type="number"
      min={15}
      max={25}
      defaultValue={15}
      required
      onChange={onChange}
    />
    <TextField
      name="height"
      type="number"
      min={15}
      max={25}
      defaultValue={15}
      required
      onChange={onChange}
    />
    <TextField
      name="difficulty"
      type="number"
      min={0}
      max={10}
      defaultValue={0}
      onChange={onChange}
    />
    <Button type="submit">CreateMaze</Button>
  </form>
));

const EnchancedForm = connect(
  state => ({}),
  dispatch => ({
    onSubmit: async payload => {
      await dispatch(createMaze(payload));
      dispatch(getMaze());
    }
  })
)(FormWithState);

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

const EnchancedControls = connect(
  state => ({}),
  dispatch => ({
    onWest: async () => {
      await dispatch(movePony("west"));
      dispatch(getMaze());
    },
    onEast: async () => {
      await dispatch(movePony("east"));
      dispatch(getMaze());
    },
    onNorth: async () => {
      await dispatch(movePony("north"));
      dispatch(getMaze());
    },
    onSouth: async () => {
      await dispatch(movePony("south"));
      dispatch(getMaze());
    }
  })
)(Controls);

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
        <EnchancedForm />

        <Grid>
          {this.props.data.map((row, y) => (
            <Row>
              {row.map((node, x) => (
                <Node node={node}>{`${y},${x}`}</Node>
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
