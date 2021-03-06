import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { configureStore } from "./configureStore";
import { persistStore } from "redux-persist";

import injectGlobalStyles from "./injectGlobalStyles";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
injectGlobalStyles();
