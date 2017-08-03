import React from 'react';
import classNames from 'classnames';
import '../../css/picks.css';

export default ({ pickNum, color, title }) => (
    <span title={ title } className={ classNames("pick-col", color) }>
        { pickNum }
    </span>
);
    