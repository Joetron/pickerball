import React from 'react';
import '../../css/picks.css';
import PickNum from './PickNum.jsx';

const pickColor = "blue";
const powerballColor = "red";

export default ({ pick }) => (
	<div className="pick-row">
		<PickNum pickNum={ pick[0] } color={ pickColor } title={ 'Pick 1' } />
		<PickNum pickNum={ pick[1] } color={ pickColor } title={ 'Pick 2' } />
		<PickNum pickNum={ pick[2] } color={ pickColor } title={ 'Pick 3' } />
		<PickNum pickNum={ pick[3] } color={ pickColor } title={ 'Pick 4' } />
		<PickNum pickNum={ pick[4] } color={ pickColor } title={ 'Pick 5' } />
		<PickNum pickNum={ pick[5] } color={ powerballColor } title={ 'Powerball Pick'} />
	</div>	
);