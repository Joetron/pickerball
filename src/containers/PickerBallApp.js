import { connect } from 'react-redux';
import PickerBallApp from '../components/PickerBallApp.jsx';
import { toggleSidebar } from '../actions';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
	return { 
		sidebarVisibilityCss: state.viewReducer.sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onMenuClick: () => dispatch(toggleSidebar()),
		onHomeClick: () => dispatch(push('/')),
		//onStatsClick: () => dispatch(push('/stats')),
		onPastNumsClick: () => dispatch(push('/winningnums'))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps, null, { pure: false }
)(PickerBallApp);