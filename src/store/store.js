import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Fix import
import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

export default store;
