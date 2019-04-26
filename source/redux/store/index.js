import { createStore, applyMiddleware, compose } from "redux";
import reduxThunkMiddleware from "redux-thunk";
import reducers from "../reducers";

const enhancer = compose(applyMiddleware(reduxThunkMiddleware));

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  return store;
}
