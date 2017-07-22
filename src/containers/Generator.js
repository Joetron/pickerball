import { connect } from 'react-redux';
import Generator from '../components/generator/Generator.jsx';

const mapStateToProps = state => {
	return {
		picks: state.picksReducer.picks 
	};
};

export default connect(
	mapStateToProps
)(Generator);