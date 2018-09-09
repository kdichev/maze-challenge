import { combineReducers } from "redux";

const app = (state = {}, action) => state;

export const configureReducers = () => combineReducers({ app });
