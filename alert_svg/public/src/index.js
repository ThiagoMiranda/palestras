import React, { Fragment, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'alert-modal'

import SuccessSVG from 'icones/lib/Page/success'

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
    const modal = () => (
      <Alert toggleModal={this.toggleModal}>
        <SuccessSVG width='130' height='100' color='white' />
        <h3>Sucesso!</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eaque totam tempore quisquam soluta, inventore eius impedit quasi ex voluptatem.</p>
      </Alert>
    )
    return (
      <Fragment>
        <a href='#' className='' onClick={this.toggleModal}>Abrir Modal!</a>
        <div className='container'>
          {alert ? modal() : ''}
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <TestePage />,
  document.getElementById('app')
)