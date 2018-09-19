import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Modal.scss'

const Modal =  ({ children, toggleModal }) => {
  return (
    <div className='my-modal'>
      <div className='my-modal__backdrop' onClick={() => { toggleModal() }} />
      <div className='my-modal__content'>
        <div className='my-modal__close-button' onClick={() => { toggleModal() }}>Fechar</div>
        { children }
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  toggleModal: PropTypes.func
}

Modal.defaultProps = {
  children: <Fragment />,
  toggleModal: () => {}
}

export default Modal
