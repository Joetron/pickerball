import React from 'react';
import ReactDOM from 'react-dom';
import PickerBallApp from './components/PickerBallApp.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PickerBallApp />, div);
});
