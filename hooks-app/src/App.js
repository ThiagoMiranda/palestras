import React, { Component } from 'react';
import './App.css';

import StatefullComponent from './components/statefullForm/SFForm'
import StatelessComponent from './components/statelessForm/SLForm'

export default class App extends Component {

  state = {
    showStatefull: true,
    showStateless: true
  }

  removeComponent = evt => {
    const { id } = evt.target
    this.setState(oldState => oldState[id] = !oldState[id])
  }

  render() {
    const { showStatefull, showStateless } = this.state

    return (  
        <div className="App">
          <header className="App-header">
            { showStatefull && <StatefullComponent />}
            { showStateless && <StatelessComponent />}
            <div>
                <button className='removeButton' id='showStatefull' onClick={this.removeComponent}>Remover statefull</button>
                <button className='removeButton' id='showStateless' onClick={this.removeComponent}>Remover stateless</button>
            </div>
          </header>
        </div>
    )
  };
}
