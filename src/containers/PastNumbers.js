import { connect } from 'react-redux';
import moment from 'moment';
import PastNumbers from '../components/past_numbers/PastNumbers.jsx';

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

export default connect(
	mapStateToProps
)(PastNumbers);