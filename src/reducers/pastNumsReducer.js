import { INIT_PAST_NUMBERS, FILTER_PAST_NUMBERS, RESET_PAST_NUMBERS } from '../actions';

const initialState = { 
	pastNumbers: [],
	startDate: null,
	endDate: null 
};

export default function pastNumsReducer(state = initialState, action) {
	switch (action.type) {
		case INIT_PAST_NUMBERS:
			const pastNumbers = action.payload.data.items;
			return Object.assign({}, state, { 
				pastNumbers: pastNumbers,
				startDate: pastNumbers[pastNumbers.length - 1].Date, 
				endDate: pastNumbers[0].Date  
			});
		case FILTER_PAST_NUMBERS:
			return Object.assign({}, state, action.payload);
		case RESET_PAST_NUMBERS:
			return Object.assign({}, state, { 
				startDate: state.pastNumbers[state.pastNumbers.length - 1].Date, 
				endDate: state.pastNumbers[0].Date });
		default:
			return state;
	}
}