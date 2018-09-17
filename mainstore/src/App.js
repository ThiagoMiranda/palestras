import React, { Component } from 'react';

import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import Main from './containers/Main'

import './assets/styles/bootstrap4/bootstrap.min.css';
import './assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import './assets/styles/responsive.css';
import './assets/styles/main_styles.css';
import './assets/styles/responsive.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
