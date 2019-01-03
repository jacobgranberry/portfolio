import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './theme/globalStyle';

require('typeface-montserrat')

ReactDOM.render(
<BrowserRouter basename="/portfolio">
    <App />
</BrowserRouter>,
document.getElementById('root')
);