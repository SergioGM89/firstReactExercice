import ReactDOM from 'react-dom/client';
import React from 'react';
import Gradient from './Gradient';

const root = ReactDOM.createRoot(document.querySelector('#gradient-container'));
root.render(<Gradient hue={23} saturation={100} number={5} />);