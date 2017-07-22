import { UPDATE_WINNING_NUMBERS } from '../actions';

const initialState = { 
	pastNumbers: [],
	filteredNumbers: [],
	startDate: null,
	endDate: null 
};

export default function pastNumsReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_WINNING_NUMBERS:
			return Object.assign({}, state, { pastNumbers: action.pastNumbers });
		default:
			return state;
	}
}