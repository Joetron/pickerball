import { connect } from 'react-redux';
import PastNumbersSidebar from '../components/sidebar/PastNumbersSidebar.jsx';

// we need all pastNumbers and filtered pastNumbers
const mapStateToProps = state => {
	return { 
	
	};
};

export default connect(
	mapStateToProps, null, null, { pure: false }
)(PastNumbersSidebar);