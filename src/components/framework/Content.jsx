import React from 'react';
import PastNumbers from '../../containers/PastNumbers.js';
import Generator from '../../containers/Generator.js';
//import Stats from './stats/Stats.jsx';
import { Route } from 'react-router-dom';

export default () => (
	<div className="pb-content" >
        <Route exact path="/" component={ Generator }/>
	    <Route path="/winningnums" component={ PastNumbers }/>
	</div>
);

//<Route path="/stats" component={ Stats }/>