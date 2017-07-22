import { 
	FETCHING_PICKS, 
	UPDATE_PICKS, 
	UPDATE_ALGORITHM, 
	UPDATE_COUNT
} from '../actions';

const picks = [
    [1, 3, 5, 7, 9, 13],
    [2, 4, 6, 8, 10, 14],
    [3, 6, 9, 12, 15, 12],
    [5, 15, 25, 35, 45, 15],
    [7, 14, 21, 28, 35, 21]
];

const Algorithm = {
	RANDOM: "RANDOM",
	GAP_ALIGN: "GAP_ALIGN"
};

const initialState = {
	isFetching: false,
    picks,
    sidebarOpen: true,
    algorithm: Algorithm.RANDOM,
    count: "6",
    pastNumbers: []
};

export default function generatorReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_PICKS:
			return Object.assign({}, state, { isFetching: true });
		case UPDATE_PICKS:
			return Object.assign({}, state, { picks: action.picks, isFetching: false });
		case UPDATE_ALGORITHM:
			return Object.assign({}, state, { algorithm: action.algorithm });
		case UPDATE_COUNT:
			return Object.assign({}, state, { count: action.count });
		default:
			return state;
	}
}