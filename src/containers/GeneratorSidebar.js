import { connect } from 'react-redux';
import GeneratorSidebar from '../components//sidebar/GeneratorSidebar.jsx';
import { loadPicks, updateAlgorithm, updateCount } from '../actions';

const mapStateToProps = state => {
	const data = state.picksReducer;
	return { 
		isLoading: data.isFetching,
		algorithm: data.algorithm,
		count: data.count
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLoadPicks: (algorithm, count) => dispatch(loadPicks(algorithm, count)),
		onUpdateAlgorithm: (algorithm) => dispatch(updateAlgorithm(algorithm)), // TODO: create component for menuitems
		onUpdateCount: (count) => dispatch(updateCount(count))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GeneratorSidebar);