import { connect } from 'react-redux';
import PastNumbers from '../components/winning_numbers/PastNumbers.jsx';

const mapStateToProps = state => {
	return {
		weeklyPicks: state.pastNumsReducer.pastNumbers
	};
};

export default connect(
	mapStateToProps
)(PastNumbers);