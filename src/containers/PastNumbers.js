import { connect } from 'react-redux';
import moment from 'moment';
import PastNumbers from '../components/content/PastNumbers.jsx';
import { initPastNumbers } from '../actions'; 

const mapStateToProps = state => {
	const pastNumbers = state.pastNumsReducer.pastNumbers;
	
	const startDate = moment(state.pastNumsReducer.startDate);
	const endDate = moment(state.pastNumsReducer.endDate);

	const filteredNumbers = pastNumbers.reduce((filtered, pick) =>  { 
		const current = moment(pick.Date);
		
		if (current.isSameOrAfter(startDate) && current.isSameOrBefore(endDate)) {
			filtered.push(pick);
		}

		return filtered;
	}, []);

	return {
		pastNumbers: filteredNumbers
	};
};

const mapDispatchToProps = dispatch => {
	return { 
		onLoad: () => dispatch(initPastNumbers()) 
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PastNumbers);