import React, { Component } from 'react';
import PickerBallApp from './components/PickerBallApp.jsx';
import './App.css';
import { initPastNumbers } from './actions';
import { store } from './index.js';


class App extends Component {

	constructor(props) {
		super(props);

		// TODO: Technically we would want to use a container and action for this
		store.dispatch(initPastNumbers());
	}

	render() {
		return (
			<div className="App">
				<PickerBallApp />
			</div>
		);
	}
}

export default App;
