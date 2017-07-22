import React from 'react';
import { Panel, DropdownButton, MenuItem, ButtonGroup, Button } from 'react-bootstrap';

export default ({ isLoading, onLoadPicks, onUpdateCount, onUpdateAlgorithm, algorithm, count }) => (
	<div className="options">
		<Panel>
			<ButtonGroup vertical block>
			    <Button  
			    	bsClass= { isLoading ? 'btn loading' : 'btn' }
			    	disabled={ isLoading }
	        		onClick={ !isLoading ? () => { onLoadPicks(algorithm, count); } : null }
	        	>
	        		{ isLoading ? 'Loading' : 'Load Picks' }
	        	</Button>
			</ButtonGroup>
		</Panel>

		<Panel>
		<ButtonGroup vertical block>
			<DropdownButton block title="Options" id="alg-dropdown" onSelect={ onUpdateAlgorithm } >
				<MenuItem active={ algorithm === "RANDOM" } eventKey="RANDOM">Random</MenuItem>
				<MenuItem active={ algorithm === "GAP_ALIGN" } eventKey="GAP_ALIGN">Gap</MenuItem>
			</DropdownButton>
			</ButtonGroup>
	    </Panel>   

	    <Panel>
	    <ButtonGroup vertical block>
	        <DropdownButton block title="Count" id="count-dropdown" onSelect={ onUpdateCount } >
				<MenuItem active={ count === "2" } eventKey="2">2</MenuItem>
				<MenuItem active={ count === "4" } eventKey="4">4</MenuItem>
				<MenuItem active={ count === "6" } eventKey="6">6</MenuItem>
				<MenuItem active={ count === "8" } eventKey="8">8</MenuItem>
				<MenuItem active={ count === "10" } eventKey="10">10</MenuItem>
			</DropdownButton>
			</ButtonGroup>
		</Panel>
	</div>
);