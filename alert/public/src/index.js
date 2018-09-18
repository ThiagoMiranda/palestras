import React, { Fragment, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'alert-modal'

import 'font-awesome/css/font-awesome.css'

class TestePage extends PureComponent {
  state = {
    alert = false
  }
  constructor (props) {
    super(props)
  }
  
  toggleModal = () => {
    this.setState(oldState => ({ alert: !oldState.alert }))
  }

  render() {
    const { alert } = this.state
    return (
      <Fragment>
        <a href='#' className='' onClick={this.openModal}>Abrir Modal!</a>
        <div className='container'>
          <Alert toggleModal={this.toggleModal}>
            blablabla
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