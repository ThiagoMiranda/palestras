import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css';

import Header from './header'
import ToggleState from '../../routes/toggleState'
import Carousel from '../../routes/carousel'
import Extra from '../../routes/extra'

import logo from '../../assets/images/palestra.png'

export default class App extends Component {

  render() {

    return (
      <Router>
        <Header />
        <div className='container'>
          <Route exact path='/' component={() => {
            return (
              <>
                <h1>React Components e Hooks!</h1>
                <img src={logo} />
              </>
            )
          }} />
          <Route path='/toggleState' component={ToggleState} />
          <Route path='/carousel' component={Carousel} />
          <Route path='/extra' component={Extra} />
        </div>
      </Router>
    )
  };
}
