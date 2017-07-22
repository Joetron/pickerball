import { loadRandomPicks, loadGapPicks } from '../apiServices/PickerBallApi.js';

export const FETCHING_PICKS = 'FETCHING_PICKS';
export const UPDATE_PICKS 	= 'UPDATE_PICKS';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const UPDATE_ALGORITHM = 'UPDATE_ALGORITHM';
export const UPDATE_COUNT = 'UPDATE_COUNT';

export const UPDATE_WINNING_NUMBERS = 'UPDATE_WINNING_NUMBERS';

export const updateWinningNumbers = (pastNumbers) => {
	return {
		type: UPDATE_WINNING_NUMBERS,
		pastNumbers
	};
};

export const loadPicks = (algorithm, count) => dispatch => {
	dispatch(fetchingPicks());

	// TODO: error handling, magic string
	if (algorithm === "GAP_ALIGN") {
		return loadGapPicks(count).then(
			response => response.json().then(
				json => dispatch(updatePicks(json.items))
		));
	}

	return loadRandomPicks(count).then(
		response => response.json().then(
			json => dispatch(updatePicks(json.items))
	));
};

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