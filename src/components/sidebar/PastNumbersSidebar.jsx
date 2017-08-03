import React, { Component } from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import PastNumsDateTime from './PastNumsDateTime.jsx';
import '../../css/react-datetime.css';

export default class PastNumbersSidebar extends Component {
	constructor() {
		super();

		this.isValidStartDate = this.isValidStartDate.bind(this);
		this.isValidEndDate = this.isValidEndDate.bind(this);
		this.onStartDateChange = this.onStartDateChange.bind(this);
		this.onEndDateChange = this.onEndDateChange.bind(this);
	}

	isValidStartDate(currentDate) {
		return currentDate.isSameOrAfter(this.props.range[0]) && 
			   currentDate.isSameOrBefore(this.props.range[1]) &&
			   currentDate.isSameOrBefore(this.props.endDate);
	}

	isValidEndDate(currentDate) {
		return currentDate.isSameOrAfter(this.props.range[0]) && 
			   currentDate.isSameOrBefore(this.props.range[1]) &&
			   currentDate.isSameOrAfter(this.props.startDate);
	}

	onStartDateChange(startDate) {
		this.props.onDateChange(startDate, this.props.endDate);
	}

	onEndDateChange(endDate) {
		this.props.onDateChange(this.props.startDate, endDate);
	}

	render () {
		return (
			<div className="pb-sidebar-items">
				<Panel>
					<span className="pb-sidebar-label">Start Date</span>
					<PastNumsDateTime 
						onChange={ this.onStartDateChange } 
						value={ this.props.startDate } 
						validator={ this.isValidStartDate } 
					/>
				</Panel>

				<Panel>
					<span className="pb-sidebar-label">End Date</span>
					<PastNumsDateTime 
						onChange={ this.onEndDateChange } 
						value={ this.props.endDate } 
						validator={ this.isValidEndDate } 
					/>
				</Panel>
				<Panel>
					<ButtonGroup vertical block>
					    <Button onClick={ this.props.onReset }>
			        		Reset
			        	</Button>
					</ButtonGroup>
				</Panel>
			</div>
		);
	}
} 