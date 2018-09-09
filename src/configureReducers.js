import { combineReducers } from "redux";
import { reducer as maze } from "./resources/maze";
import { reducer as mazeState } from "./resources/mazeState";
import { reducer as move } from "./resources/move";

export const configureReducers = () =>
  combineReducers({ maze, mazeState, move });
