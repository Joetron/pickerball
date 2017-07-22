import React from 'react';
import '../../css/pick.css';
import PickNum from './PickNum.jsx';

const pickColor = "blue";
const powerballColor = "red";
const size = "size-big";

export default ({ pick }) => (
	<div className="pick">
		<PickNum pickNum={ pick[0] } color={ pickColor } size ={ size } title={ 'Pick 1'} />
		<PickNum pickNum={ pick[1] } color={ pickColor } size ={ size } title={ 'Pick 2'} />
		<PickNum pickNum={ pick[2] } color={ pickColor } size ={ size } title={ 'Pick 3'} />
		<PickNum pickNum={ pick[3] } color={ pickColor } size ={ size } title={ 'Pick 4'} />
		<PickNum pickNum={ pick[4] } color={ pickColor } size ={ size } title={ 'Pick 5'} />
		<PickNum pickNum={ pick[5] } color={ powerballColor } size ={ size } title={ 'Powerball Pick'} />
	</div>	
);