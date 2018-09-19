import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'

/**Containers */
import Main from './containers/Main'
import Product from './containers/Product'
import AboutUs from './containers/AboutUs'

import './assets/styles/bootstrap4/bootstrap.min.css';
import './assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import './assets/styles/responsive.css';
import './assets/styles/responsive.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/aboutus' component={AboutUs} />
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
