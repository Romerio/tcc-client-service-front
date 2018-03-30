import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

import reducers from "./reducers";

export default function configureStore(initialState) {
	const createStoreWithMiddleware = applyMiddleware(thunk, multi, promise)(createStore);
	const store = createStoreWithMiddleware(reducers, initialState || devTools);

	return store;
}
