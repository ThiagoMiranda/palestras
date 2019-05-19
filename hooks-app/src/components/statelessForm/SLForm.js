import React from 'react'

export default function StatefullForm() {
    let company = '', cnpj = '', address = '', windowWidth = window.innerWidth

    return (
        <div className='container'>
            <form className='form'>
                <div className='input-wrapper'>
                    <label htmlFor='company'>Empresa:</label>
                    <input name='company' id='company' value={company} placeholder='Digite o nome da empresa' onChange={() => {}} />

                    <label htmlFor='cnpj'>CNPJ:</label>
                    <input name='cnpj' id='cnpj' value={cnpj} placeholder='Digite o CNPJ' onChange={() => {}} />

                    <label htmlFor='address'>Endereço:</label>
                    <input name='address' id='address' value={address} placeholder='Digite o endereço' onChange={() => {}} />
                    
                </div>
                <div className='input-wrapper footer'>
                    <button type="submit">Submit</button>
                    <p>Tamanho: {windowWidth}</p>
                </div>
            </form>
        </div>
    )
}