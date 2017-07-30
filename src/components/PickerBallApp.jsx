import React from 'react';
import Generator from '../containers/Generator.js';
import Banner from '../containers/Banner.js';
import Sidebar from '../containers/Sidebar.js';
import PastNumbers from '../containers/PastNumbers.js';
import Stats from './stats/Stats.jsx';
import { Route } from 'react-router-dom';
import '../css/picks.css';

export default () => (
	<div className="parent" >
        <Banner />
        <div className="content">
	        <div className="side">
	        	<Sidebar />
	        </div>
	        <Route exact path="/" component={ Generator }/>
		    
		    <Route path="/winningnums" component={ PastNumbers }/>
		    <div className="side" />
	    </div>
	</div>
);

//<Route path="/stats" component={ Stats }/>