import { connect } from 'react-redux';
import Banner from '../components/header/Banner.jsx';
import { toggleSidebar } from '../actions';
import { push } from 'react-router-redux';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		onMenuClick: () => dispatch(toggleSidebar()),
		onHomeSelected: () => dispatch(push('/')),
		onStatsSelected: () => dispatch(push('/stats')),
		onWeeklyNumsSelected: () => dispatch(push('/winningnums'))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Banner);