import React, { Component } from 'react';
import GlobalStyle from './theme/globalStyle';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GlobalStyle />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
