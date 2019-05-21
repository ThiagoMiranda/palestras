import React, { useState } from 'react'

import { StatefullForm as StatefullComponent, StatelessForm as StatelessComponent } from '../../components/useStateHooks'

export default function () {
  const [showStatefull, setShowStatefull] = useState(true)
  const [showStateless, setShowStateless] = useState(true)

  function toggleComponent(evt) {
    const { id } = evt.target
    id === 'showStatefull' && setShowStatefull(!showStatefull)
    id === 'showStateless' && setShowStateless(!showStateless)
  }

  return (
    <div>
      {showStatefull && <StatefullComponent />}
      {showStateless && <StatelessComponent />}
      <div>
        <button className='removeButton' id='showStatefull' onClick={toggleComponent}>{showStatefull ? 'Remover' : 'Inserir'} statefull</button>
        <button className='removeButton' id='showStateless' onClick={toggleComponent}>{showStateless ? 'Remover' : 'Inserir'} stateless</button>
      </div>
    </div>
  )
}