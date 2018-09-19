import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Modal.scss'

const Modal =  ({ children, toggleModal }) => {
  return (
    <div className='modal'>
      <div className='backdrop' onClick={() => { toggleModal() }} />
      <div className='content'>
        <div className='close-button' onClick={() => { toggleModal() }}>Fechar</div>
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
