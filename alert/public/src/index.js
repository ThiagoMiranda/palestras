import React, { Fragment, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'alert-modal'

import '../../lib/ac.css'

class TestePage extends PureComponent {
  state = {
    alert: true
  }
  constructor (props) {
    super(props)
  }
  
  toggleModal = () => {
    console.log('bla')
    this.setState(oldState => ({ alert: !oldState.alert }))
  }

  render() {
    const { alert } = this.state
    const modal = <Alert toggleModal={this.toggleModal}>blablabla</Alert>
    return (
      <Fragment>
        <a href='#' className='' onClick={this.toggleModal}>Abrir Modal!</a>
        <div className='container'>
          {alert ? modal : ''}
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <TestePage />,
  document.getElementById('app')
)