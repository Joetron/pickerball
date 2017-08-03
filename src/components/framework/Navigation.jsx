import React from 'react';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import PickNum from '../picks/PickNum.jsx';
import '../../css/navigation.css';

export default ({ onMenuClick, onHomeClick, onPastNumsClick }) => (
    <div title="PickerBall Powerball Picker" className="pb-navigation">

        <ButtonGroup bsClass="pb-menu-icon">
            <Button bsSize="large" bsStyle="primary" title="Menu" onClick={ onMenuClick }>
                <Glyphicon glyph="menu-hamburger" />
            </Button>
        </ButtonGroup>

        <div className="pb-logo">
            <span title="Powerball Logo">
                PB
            </span>
        </div>

        <span className="pb-header">Pickerball</span>

        <div className="spacer" />

        <ButtonGroup>           
            <Button bsSize="large" bsStyle="primary" onClick={ onHomeClick } title="Home">
                <Glyphicon glyph="home" />
            </Button>
            <Button bsSize="large" bsStyle="primary" onClick={ onPastNumsClick } title="Past Numbers">
                <Glyphicon glyph="calendar" />
            </Button>
        </ButtonGroup>
    </div>
);


            // <Button bsSize="large" bsStyle="primary" onClick={ onStatsSelected } title="Stats">
            //     <Glyphicon glyph="stats" />
            // </Button>