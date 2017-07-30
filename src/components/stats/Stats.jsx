import React from 'react';
import { Table } from 'react-bootstrap';
import '../../css/past-numbers.css';

// statistics:
// median 1st pick -> 6th
// modal 1st -> 6th
// median lowest -> highest
// modal lowest -> highest pick
// median shortest -> longest gap
// modal gap
// hot numbers (N weeks)
// cold numbers (N weeks)
export default ({ stats }) => (
	<div className="past-numbers">
		<Table striped bordered condensed hover>
		    <thead>
		      <tr>
		        <th>Date</th>
		        <th>WB1</th>
		        <th>WB2</th>
		        <th>WB3</th>
		        <th>WB4</th>
		        <th>WB5</th>
		        <th>PB</th>
		        <th>PP</th>
		      </tr>
		    </thead>
			<tbody>
				{ [1].map((stat) => 
					<tr>
						<td>{ "pick.Date" }</td>
						<td>{ "pick.WB1" }</td>
						<td>{ "pick.WB2" }</td>
						<td>{ "pick.WB3" }</td>
						<td>{ "pick.WB4" }</td>
						<td>{ "pick.WB5" }</td>
						<td>{ "pick.WPB" }</td>
						<td>{ "pick.PP" }</td>
					</tr>
				) }
			</tbody>
		</Table>
    </div>
);