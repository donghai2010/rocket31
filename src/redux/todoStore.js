import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import todoReducer from "./reducers/todoReducer";
import thunk from "redux-thunk";
const rocket31 = "rocket31";

const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  todoReducer,
  conposeEnhancers(applyMiddleware(thunk.withExtraArgument(rocket31)))
);

export default store;
