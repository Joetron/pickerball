import { TOGGLE_SIDEBAR } from '../actions';

const initialState = { sidebarOpen: true };

export default function generatorReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return { sidebarOpen: !state.sidebarOpen };
		default:
			return state;
	}
}