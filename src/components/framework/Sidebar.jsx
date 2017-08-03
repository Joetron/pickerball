import React from 'react';
import GeneratorSidebar from '../../containers/GeneratorSidebar.js';
import PastNumbersSidebar from '../../containers/PastNumbersSidebar.js';
//import StatsSidebar from './StatsSidebar.jsx';
import { Route } from 'react-router-dom';
import '../../css/sidebar.css';

export default () => (
	<div className="pb-sidebar">
		<Route exact path="/" component={ GeneratorSidebar }/>
		<Route exact path="/winningnums" component={ PastNumbersSidebar }/>
	</div>	
);

//<Route exact path="/stats" component={ StatsSidebar }/>