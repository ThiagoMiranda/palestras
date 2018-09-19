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
    const modal = () => (
      <Alert toggleModal={this.toggleModal}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C22.4283 0 0 22.4283 0 50C0 77.5717 22.4283 100 50 100C77.5717 100 100 77.5678 100 50C100 22.4322 77.5717 0 50 0ZM50 92.2541C26.7041 92.2541 7.7459 73.2998 7.7459 50C7.7459 26.7002 26.7041 7.7459 50 7.7459C73.2998 7.7459 92.2541 26.7002 92.2541 50C92.2541 73.2998 73.2959 92.2541 50 92.2541Z" fill="white"/>
          <path d="M72.9397 32.6103C71.3633 31.1773 68.9118 31.2896 67.4711 32.8736L43.8459 58.8884L32.4323 47.2851C30.9256 45.7591 28.478 45.7359 26.9559 47.2386C25.4299 48.7375 25.4067 51.189 26.9094 52.715L41.1967 67.2386C41.9288 67.9822 42.9202 68.3966 43.9581 68.3966C43.9813 68.3966 44.0084 68.3966 44.0317 68.4005C45.1006 68.3773 46.1077 67.9203 46.8241 67.1302L73.2028 38.083C74.6399 36.4949 74.5237 34.0472 72.9397 32.6103Z" fill="white"/>
        </svg>
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