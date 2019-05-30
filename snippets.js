/** Stateleesss */
import React, { useState, useEffect } from 'react'

function useWindowEffect() {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const onChangeWindowWidth = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', onChangeWindowWidth)
        return () => window.removeEventListener('resize', onChangeWindowWidth)
    }, [])

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

//** Carousel */
import React, { useState, useMemo } from 'react'

import './carousel.css'

// function parseImg(data) {
//     console.info('parsei')
//     return data.map(({ id, images: { thumbnail, standard_resolution }, tags }) => ({
//         tags,
//         thumbnail: thumbnail.url,
//         image: standard_resolution.url,
//         id
//     }))
// }

function parseImg(data) {
    return data.map(({ id, images: { thumbnail, standard_resolution }, tags }) => 
        (<img key={id} src={standard_resolution.url} alt={tags.join(' , ')} />))
}

export default function({ data }) {
    const [currentImage, setCurrentImage] = useState(0)

    const list = useMemo(() => parseImg(data), [data])

    function toggleImage(evt) {
        const { target: { dataset } } = evt
        dataset.toggle === 'prev' && setCurrentImage((currentImage - 1 + list.length) % list.length)
        dataset.toggle === 'next' && setCurrentImage((currentImage + 1) % list.length)
    }

    return (
        <div className='carousel-container'>
            <div className='wrap'>
                {list[currentImage]}
            </div>
            <div className='controls'>
                <button onClick={toggleImage} className='toggle' data-toggle='prev'>Prev</button>
                <button onClick={toggleImage} className='toggle' data-toggle='next'>Next</button>
            </div>
        </div>
    )
}

import SuccessSVG from 'icones/lib/page/success'
<SuccessSVG width='130' height='100' color='white' />
