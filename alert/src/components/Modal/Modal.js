import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

import './Modal.scss'

class Modal extends PureComponent {
  state = {
    isOpen: false
  }

  constructor (props) {
    super(props)
    if (typeof document !== 'undefined') {
      this.container = document.createElement('div')
    }
  }

  open = content => {
    if (typeof document !== 'undefined') {
      document.body.appendChild(this.container)
    }
    this.setState({isOpen: true})
  }

  close = () => {
    this.setState({isOpen: false})
  }

  render () {
    const { isOpen } = this.state
    const { children } = this.props
    
    return (isOpen) ? createPortal(children, this.container) : null
  }
}

Modal.propTypes = {
  children: PropTypes.any
}

Modal.defaultProps = {
  children: <div />
}

export default Modal
