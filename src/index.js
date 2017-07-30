import React from 'react';
import { render } from 'react-dom';
//import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import rootReducer from './reducers';
import './index.css';

export const history = createHistory();

const middleware = [
	reduxPromise, //thunkMiddleware,
	routerMiddleware(history)
];

export const store = createStore(
	rootReducer,
	applyMiddleware(
		...middleware
));

render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
