import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';
import viewerReducer from './js/reducers';
import App from './js/App';
import './css/index.css';

const store = createStore(viewerReducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history = {history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
