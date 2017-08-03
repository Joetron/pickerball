import { connect } from 'react-redux';
import Generator from '../components/content/Generator.jsx';

const mapStateToProps = state => {
	return {
		picks: state.picksReducer.picks 
	};
};

export default connect(
	mapStateToProps
)(Generator);