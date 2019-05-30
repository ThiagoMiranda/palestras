import React from 'react'

import './carousel.css'

export default class Carousel extends React.PureComponent {
    state = {
        currentImage: 0,
        list: []
    }

    componentDidMount() {
        this.setState({
            list: this.parseImg(this.props.data)
        })
    }

    parseImg = () => {
        const { data } = this.props
        return data.map(({ id, images: { thumbnail, standard_resolution }, tags }) => 
        (<img key={id} src={standard_resolution.url} alt={tags.join(' , ')} />))
    }

    toggleImage = evt => {
        const { target: { dataset } } = evt
        dataset.toggle === 'prev' && this.setState(prevState => ({
            currentImage: (prevState.currentImage === 0) ? prevState.list.length - 1 : prevState.currentImage - 1 
        }))
        dataset.toggle === 'next' && this.setState(prevState => ({
            currentImage: (prevState.currentImage === prevState.list.length - 1) ? 0 : prevState.currentImage + 1 
        }))
    }

    render() {
        const { currentImage, list } = this.state

        return (
            <div className='carousel-container'>
                <div className='wrap'>
                    {list[currentImage]}
                </div>
                <div className='controls'>
                    <button onClick={this.toggleImage} className='toggle' data-toggle='prev'>Prev</button>
                    <button onClick={this.toggleImage} className='toggle' data-toggle='next'>Next</button>
                </div>
            </div>
        )
    }

}