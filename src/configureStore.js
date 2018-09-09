import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureReducers } from "./configureReducers";
import { configurePersistReducer } from "./configurePersist";

export const configureStore = () =>
  createStore(
    configurePersistReducer(configureReducers()),
    composeWithDevTools(applyMiddleware(thunk))
  );
