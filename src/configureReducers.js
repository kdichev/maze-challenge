import { combineReducers } from "redux";
import { reducer as maze } from "./resources/maze";
import { reducer as mazeState } from "./resources/mazeState";
import { reducer as move } from "./resources/move";

const pathfinder = (
  state = {
    pony: null,
    domokun: null,
    exit: null,
    maze: []
  },
  action
) => {
  switch (action.type) {
    case "@@/pathinder/maze":
      return { ...state, maze: action.payload.maze };
    case "@@/pathinder/ponyPositoon":
      return { ...state, pony: action.payload };
    case "@@/pathinder/domokunPosition":
      return { ...state, domokun: action.payload };
    case "@@/pathinder/endPointPosition":
      return { ...state, exit: action.payload };
    default:
      return state;
  }
};

export const configureReducers = () =>
  combineReducers({ maze, mazeState, move, pathfinder });
