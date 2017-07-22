import React from 'react';
import classNames from 'classnames';
import '../../css/pick.css';

export default ({ pickNum, color, title, size }) => (
    <span title={ title } className={ classNames("pick-num", color, size) }>
        { pickNum }
    </span>
);
    