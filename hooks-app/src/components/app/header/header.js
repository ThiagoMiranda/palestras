import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css';

export default function (props) {
  return (
    <header>
      <nav>
        <NavLink activeClassName="current_item" exact to='/'>Home</NavLink>
        <NavLink activeClassName="current_item" to='/toggleState'>Toggle State</NavLink>
        <NavLink activeClassName="current_item" to='/carousel'>Carousel</NavLink>
        <NavLink activeClassName="current_item" to='/extra'>Extra</NavLink>
      </nav>
    </header>
  )
}