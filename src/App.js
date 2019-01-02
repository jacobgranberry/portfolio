import React, { Component } from 'react';
import GlobalStyle from './theme/globalStyle';
import { Route } from 'react-router-dom';

import Home from './templates/Home';
import About from './templates/About';
import Contact from './templates/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GlobalStyle />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
