import React from 'react';
import DateTime from 'react-datetime'; //https://github.com/YouCanBookMe/react-datetime

// inputProps disables entering text manually for now
export default ({ value, validator, onChange }) => (
	<DateTime 
		value= { value }
		timeFormat={ false } 
		isValidDate={ validator }
		onChange= { onChange }
		inputProps={ { onChange: ()=> {} } } 
		closeOnSelect="true"
	/>
);