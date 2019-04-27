import { createStore, applyMiddleware, compose } from "redux";
import reduxThunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import reducers from "../reducers";

let middleware = undefined;
if (__DEV__) {
  middleware = applyMiddleware(reduxThunkMiddleware, logger);
} else {
  middleware = applyMiddleware(reduxThunkMiddleware);
}

const enhancer = compose(middleware);

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  return store;
}
