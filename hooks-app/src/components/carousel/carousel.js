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
    console.info('parsei')
    return data.map(({ id, images: { thumbnail, standard_resolution }, tags }) => 
        (<img key={id} src={standard_resolution.url} alt={tags.join('')} />))
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