import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';

export default () => (
	<div className="pb-sidebar-items">
		<Panel>
			<ButtonGroup vertical block>
			    <Button onClick={ () => {  } }>
	        		Stats Do Something
	        	</Button>
			</ButtonGroup>
		</Panel>
	</div>
);