import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar.jsx';

const mapStateToProps = state => {
	return { 
		css: state.viewReducer.sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'
	};
};

export default connect(
	mapStateToProps, null, null, { pure: false }
)(Sidebar);