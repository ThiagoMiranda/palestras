import React, { useState, useRef } from 'react'

import SuccessSVG from 'icones/lib/page/pig'

const returnRandom = number => (Math.floor(Math.random() * number))

function Interpig() {
    const interval = useRef()
    const [counter, setCounter] = useState(0)
    const [flag, setFlag] = useState(false)

    function raffle() {
        if (flag) {
            setFlag(false)
            interval.current && clearInterval(interval.current)
        }else {
            interval.current = setInterval(() => {
                setCounter(returnRandom(50))
            }, 200);
            setFlag(true)
        }
    }
    
    return (
        <div>  
            <SuccessSVG width='130' height='100' color='white' />
            <div>{counter}</div>
            <button onClick={raffle}>{flag ? 'Parar!' : 'Sortear'}</button>
        </div>
    )
}

export default Interpig