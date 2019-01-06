import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedinIn, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { fas, faCircle } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';
import './theme/globalStyle';
import "animate.css/animate.min.css";;

require('typeface-montserrat');
require('typeface-righteous');

library.add( fab, faLinkedinIn, faGithubAlt, faInstagram, fas, faCircle );

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root')
);