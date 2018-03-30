import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import createStore from './modules/main/configureStore'
import App from "./modules/main/app";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore()
import Snackbar from './modules/notification/components/snackbar'

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>,
        <Provider store={store}>
            <Snackbar />
        </Provider>
    </div>
, document.getElementById('app'))
