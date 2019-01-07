import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedinIn, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { fas, faCircle } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';
import './theme/globalStyle';
import "animate.css/animate.min.css";

require('typeface-montserrat');
require('typeface-righteous');

library.add( fab, faLinkedinIn, faGithubAlt, faInstagram, fas, faCircle );

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
<Router history={hashHistory}>
    <App />
</Router>,
document.getElementById('root')
);