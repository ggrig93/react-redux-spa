import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers';
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
