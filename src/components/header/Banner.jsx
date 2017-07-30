import React from 'react';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import PickNum from '../picks/PickNum.jsx';
import '../../css/banner.css';

export default ({ onMenuClick, onHomeSelected, onStatsSelected, onWeeklyNumsSelected }) => (
    <div title="PickerBall Powerball Picker" className="banner bg-primary">

        <ButtonGroup bsClass="menu-icon">
            <Button bsSize="large" bsStyle="primary" title="Menu" onClick={ onMenuClick }>
                <Glyphicon glyph="menu-hamburger" />
            </Button>
        </ButtonGroup>

        <div className="App-logo">
            <PickNum pickNum="PB" color="red" size="size-small" title="Powerball Logo" />
        </div>

        <span className="pb-header">Pickerball</span>

        <div className="spacer" />

        <ButtonGroup>           
            <Button bsSize="large" bsStyle="primary" onClick={ onHomeSelected } title="Home">
                <Glyphicon glyph="home" />
            </Button>
            <Button bsSize="large" bsStyle="primary" onClick={ onWeeklyNumsSelected } title="Past Numbers">
                <Glyphicon glyph="calendar" />
            </Button>
        </ButtonGroup>
  </div>
);


            // <Button bsSize="large" bsStyle="primary" onClick={ onStatsSelected } title="Stats">
            //     <Glyphicon glyph="stats" />
            // </Button>