import React, { Fragment, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'alert-modal'

import 'font-awesome/css/font-awesome.css'

class TestePage extends PureComponent {
  constructor (props) {
    super(props)
    this.alert = null
  }

  setRef = el => this.alert = el

  openModal = evt => {
    evt.preventDefault()
    this.alert.open()
  }

  render() {
    return (
      <Fragment>
        <div id="sidebar">
          <ul>
            <li><a href='#' className='' onClick={this.openModal}>Abrir Modal!</a></li>
          </ul>
        </div>
        <div className='container'>
          <Alert ref={this.setRef}>
            <div className='modal'>
              <div className='backdrop' onClick={() => { this.alert.close() }} />
              <div className='content'>
                <div className='close-button' onClick={() => { this.alert.close() }}>Fechar</div>
              </div>
            </div>
          </Alert>
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <TestePage />,
  document.getElementById('app')
)