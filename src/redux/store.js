import { applyMiddleware, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import thunk from "redux-thunk";

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
