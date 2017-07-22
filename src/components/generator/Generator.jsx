import React from 'react';
import Pick from '../picks/Pick.jsx';
import '../../css/picks.css';

export default ({ picks }) => (
	<div className="picks-container" >
	    <div  >
	    	{ picks.map((pick, i) => <Pick key={ i } pick={ pick } />) }
	    </div>
	</div>
);