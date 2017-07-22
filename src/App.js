import React, { Component } from 'react';
import PickerBallApp from './components/PickerBallApp.jsx';
import './App.css';
import { loadWinNums } from './apiServices/PickerBallApi.js';
import { updateWinningNumbers } from './actions';
import { store } from './index.js';


class App extends Component {

	constructor(props) {
		super(props);

		loadWinNums().then(
			response => response.json().then(
				json => store.dispatch(updateWinningNumbers(json.items))
		));
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
