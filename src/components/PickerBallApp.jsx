import React from 'react';
import Navigation from './framework/Navigation.jsx';
import Sidebar from './framework/Sidebar.jsx';
import Content from './framework/Content.jsx';
import classNames from 'classnames';
import '../css/app.css';

/**
 * This components is responsible for providing the layout for the Navigation,
 * Sidebar, and Content.
 *
 * The css should provide the rules for the container sizes using responsive 
 * design.
 *
 * The css should also provide classes for hiding and showing the sidebar 
 * based off of the css as well as hiding the toggle button for the sidebar.
 *
 * The layouts in each component should fill the wrapper to 100% and provide  
 * scrolling as necessary.
 *
 * This module should also have a container that controls the routes from
 * Navigation, as well as the css for showing and hiding the sidebar.
 */

export default ({ sidebarVisibilityCss, onMenuClick, onHomeClick, onPastNumsClick }) => (
	<div className="pb-body-wrapper" >
		<div className="pb-navigation-wrapper bg-primary">
        	<Navigation 
        		onMenuClick={ onMenuClick }
        		onHomeClick={ onHomeClick }
        		onPastNumsClick={ onPastNumsClick } />
        </div>
        <div className="pb-content-sidebar-wrapper" >
        <div className={ classNames(sidebarVisibilityCss, "pb-content-sidebar") } >
	        <div className={ classNames("pb-sidebar-wrapper",  "bg-primary") }>
	        	<Sidebar />
	        </div>
	        <div className="pb-content-wrapper">
	        	<Content />
	        </div>
	    </div>
	    </div>
	</div>
);

