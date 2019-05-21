import React, { useState, useEffect } from 'react'

function useWindowEffect() {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const onChangeWindowWidth = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', onChangeWindowWidth)
        return () => window.removeEventListener('resize', onChangeWindowWidth)
    }, [windowWidth])

    return windowWidth
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function onChangeCallback(evt) {
        setValue(evt.target.value)
    }

    return {
        value,
        onChange: onChangeCallback
    }
}

export default function StatefullForm() {
    const company = useFormInput('')
    const cnpj = useFormInput('')
    const address = useFormInput('')
    const windowWidth = useWindowEffect()

    useWindowEffect()

    return (
        <div className='stateless-component'>
            <form className='form'>
                <div className='input-wrapper'>
                    <label htmlFor='company'>Empresa:</label>
                    <input name='company' id='company' placeholder='Digite o nome da empresa' {...company} />

                    <label htmlFor='cnpj'>CNPJ:</label>
                    <input name='cnpj' id='cnpj' value={cnpj} placeholder='Digite o CNPJ' {...cnpj} />

                    <label htmlFor='address'>Endereço:</label>
                    <input name='address' id='address' placeholder='Digite o endereço' {...address} />
                    
                </div>
                <div className='input-wrapper footer'>
                    <button type="submit">Submit</button>
                    <p>Tamanho: {windowWidth}</p>
                </div>
            </form>
        </div>
    )
}