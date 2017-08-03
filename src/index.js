import React from 'react';
import { render } from 'react-dom';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import PickerBallApp from './containers/PickerBallApp';
import rootReducer from './reducers';
import './index.css';

export const history = createHistory();

const middleware = [
	reduxPromise,
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
			<PickerBallApp />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
