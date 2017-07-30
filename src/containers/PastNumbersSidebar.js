import { connect } from 'react-redux';
import moment from 'moment';
import { filterPastNumbers, resetPastNumbers } from '../actions'; 
import PastNumbersSidebar from '../components/sidebar/PastNumbersSidebar.jsx';

const mapStateToProps = state => {
	const pastDates = state.pastNumsReducer.pastNumbers.map(pick => moment(pick.Date));
	
	return { 
		pastDates: pastDates,
		startDate: moment(state.pastNumsReducer.startDate),
		endDate: moment(state.pastNumsReducer.endDate),
		range: [pastDates[pastDates.length - 1], pastDates[0]]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDateChange: (startDate, endDate) => dispatch(filterPastNumbers(startDate, endDate)),
		onReset: () => dispatch(resetPastNumbers())
	}
}
export default connect(
	mapStateToProps, mapDispatchToProps, null, { pure: false }
)(PastNumbersSidebar);