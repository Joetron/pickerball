import React from 'react';
import Pick from '../picks/Pick.jsx';
import classNames from 'classnames';
import '../../css/picks.css';

export default ({ picks }) => (
	<div  className={ classNames("pb-picks-wrapper", "pick-" + picks.length) } >
		<div  className="pb-picks-container" >
	    	{ picks.map((pick, i) => <Pick key={ i } pick={ pick } />) }
	    </div>
    </div>
);