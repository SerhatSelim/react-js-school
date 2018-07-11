import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import School from './containers/School/School';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div className="App">
        <School />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
