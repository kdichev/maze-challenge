import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import ReactDOM from "react-dom";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = mockStore({
    mazeState: {
      data: { data: [], size: [1], pony: [1], domokun: [1], endPoint: [1] }
    }
  });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
