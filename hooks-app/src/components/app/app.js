import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css';

import Header from './header'
import ToggleState from '../../routes/toggleState'

export default class App extends Component {

  render() {

    return (
      <Router>
        <Header />
        <div className='container'>
          <Route path='/toggleState' component={ToggleState} />
        </div>
      </Router>
    )
  };
}
