import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import DateTime from 'react-datetime';
import '../../css/react-datetime.css';

export default () => (
	<div className="options">
		<Panel>
			<ButtonGroup vertical block>
			    <Button onClick={ () => {  } }>
	        		Reset
	        	</Button>
			</ButtonGroup>
		</Panel>
		<Panel>
			<span className="sb-label">Start Date</span><DateTime />
		</Panel>

		<Panel>
			<span className="sb-label">End Date</span><DateTime />
		</Panel>
	</div>
);