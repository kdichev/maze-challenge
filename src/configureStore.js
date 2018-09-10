import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureReducers } from "./configureReducers";
import { configurePersistReducer } from "./configurePersist";
import { splitEvery, compose } from "ramda";
import { findNodePosition } from "./pathfinding";
import { isEmpty } from "ramda";

const pathfinder = store => next => action => {
  next(action);
  if (action.type === "MAZESTATE_SUCCESS") {
    store.dispatch({ type: "@@/pathinder/start" });
    const {
      size,
      data,
      pony,
      domokun,
      endPoint
    } = store.getState().mazeState.data;
    const maze = compose(
      arr =>
        arr.map((row, y) =>
          row.map((node, x) => ({ ...node, position: { x, y } }))
        ),
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
    )(store.getState().mazeState.data.data);
    store.dispatch({
      type: "@@/pathinder/maze",
      payload: { maze }
    });
    store.dispatch({
      type: "@@/pathinder/ponyPositoon",
      payload: findNodePosition(maze, "isPony")
    });
    store.dispatch({
      type: "@@/pathinder/domokunPosition",
      payload: findNodePosition(maze, "isDomokun")
    });
    store.dispatch({
      type: "@@/pathinder/endPointPosition",
      payload: findNodePosition(maze, "isEndPoint")
    });
    aStar(
      maze,
      findNodePosition(maze, "isPony"),
      findNodePosition(maze, "isEndPoint")
    );
  }
};

const aStar = (grid, start, end) => {
  let closedSet = [];
  let openSet = [end];

  while (!isEmpty(openSet)) {
    let current = 0;
    if (openSet[current] === end) {
      console.log("done");
    }
    openSet = openSet.filter(node => node !== openSet[current]);
    closedSet = [...closedSet, openSet[current]];
  }
};

export const configureStore = () =>
  createStore(
    configurePersistReducer(configureReducers()),
    composeWithDevTools(applyMiddleware(thunk, pathfinder))
  );
