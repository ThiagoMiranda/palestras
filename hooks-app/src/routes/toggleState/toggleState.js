import React, { useState } from 'react'

import './toggleState.css'

import { StatefullForm as StatefullComponent, StatelessForm as StatelessComponent } from '../../components/useStateHooks'

export default function () {
  const [showStatefull, setShowStatefull] = useState(true)
  const [showStateless, setShowStateless] = useState(true)

  function toggleComponent(evt) {
    const { target: { id } } = evt
    evt.preventDefault()
    id === 'showStatefull' && setShowStatefull(!showStatefull)
    id === 'showStateless' && setShowStateless(!showStateless)
  }

  return (
    <div>
      {showStatefull && <StatefullComponent />}
      {showStateless && <StatelessComponent />}
      <div>
        <a href='/' className='button btnBorder btnBlueGreen' id='showStatefull' onClick={toggleComponent}>{showStatefull ? 'Remover' : 'Inserir'} statefull</a>
        <a href='/' className='button btnBorder btnBlueGreen' id='showStateless' onClick={toggleComponent}>{showStateless ? 'Remover' : 'Inserir'} stateless</a>
      </div>
    </div>
  )
}