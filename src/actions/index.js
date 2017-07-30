import { loadRandomPicks, loadGapPicks } from '../apiServices/PickerBallApi.js';
import axios from 'axios';
import { store } from '../index.js';

const ROOT_URL = 'https://pickerballapi.appspot.com/_ah/api/numbers/v1/';
const API_QUERY_KEY = '?key=AIzaSyD5pKid4o5FxY48VKNxzjrSySMHE1IUh0E';

const randomMethodUrl = `${ROOT_URL}random_picks${API_QUERY_KEY}`;
const gapMethodUrl = `${ROOT_URL}gap_picks${API_QUERY_KEY}`;
const pastNumsUrl = `${ROOT_URL}winnums${API_QUERY_KEY}`;

export const FETCHING_PICKS = 'FETCHING_PICKS';
export const UPDATE_PICKS 	= 'UPDATE_PICKS';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const UPDATE_ALGORITHM = 'UPDATE_ALGORITHM';
export const UPDATE_COUNT = 'UPDATE_COUNT';

export const UPDATE_WINNING_NUMBERS = 'UPDATE_WINNING_NUMBERS';
export const INIT_PAST_NUMBERS = 'INIT_PAST_NUMBERS';
export const FILTER_PAST_NUMBERS = 'FILTER_PAST_NUMBERS';
export const RESET_PAST_NUMBERS = 'RESET_PAST_NUMBERS';

const CONFIG = { headers: { 'Content-type': 'application/json' } };

export const initPastNumbers = () => {
	const request = axios.get(pastNumsUrl, CONFIG);
	return {
		type: INIT_PAST_NUMBERS,
		payload: request
	};
};

export const filterPastNumbers = (startDate, endDate) => {
	return {
		type: FILTER_PAST_NUMBERS,
		payload: { startDate, endDate }
	};
};

export const resetPastNumbers = () => {
	return {
		type: RESET_PAST_NUMBERS
	};
};

// TODO: Split into 2 action creators
// Our axios version, needed to import store for it to work
export const loadPicks = (algorithm, count) => {
	store.dispatch(fetchingPicks());

	if (algorithm === "GAP_ALIGN") {
		return {
			type: UPDATE_PICKS,
			payload: axios.post(gapMethodUrl, {count}, CONFIG)
		};
	}

	return {
		type: UPDATE_PICKS,
		payload: axios.post(randomMethodUrl, {count}, CONFIG)
	};
};

// Thunk version
// export const loadPicks = (algorithm, count) => dispatch => {
// 	dispatch(fetchingPicks());

// 	const request = axios.get(pastNumsUrl, HEADERS);

// 	if (algorithm === "GAP_ALIGN") {
// 		return loadGapPicks(count).then(
// 			response => response.json().then(
// 				json => dispatch(updatePicks(json.items))
// 		));
// 	}

// 	return loadRandomPicks(count).then(
// 		response => response.json().then(
// 			json => dispatch(updatePicks(json.items))
// 	));
// };

export const updatePicks = (picks) => {
	return {
		type: UPDATE_PICKS,
		picks
	};
};

export const fetchingPicks = () => {
	return {
		type: FETCHING_PICKS
	};
};

export const toggleSidebar = () => {
	return {
		type: TOGGLE_SIDEBAR
	}
};

export const updateAlgorithm = (algorithm) => {
	return {
		type: UPDATE_ALGORITHM,
		algorithm
	}
};

export const updateCount = (count) => {
	return {
		type: UPDATE_COUNT,
		count
	}
};