import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { Request } from '../../utils'

import './instagram.css'

const URL = 'https://www.instagram.com/oauth/authorize/?client_id=f55d14ef132f4be98c3cb1fac31edde4&redirect_uri=http://localhost:3000/carousel&response_type=token&scope=public_content'
const SEARCH_URL = 'https://api.instagram.com/v1/users/search?callback=?'

export default withRouter(function(props) {
    useEffect(() => {
        if (props.location.hash) {
            async function getPhotos() {
                const access_token = props.location.hash.replace('#access_token=', '')
                const photoArray = await Request({
                    url: `${SEARCH_URL}`,
                    data: {
                        access_token,
                        q: 'cebolinhabh'
                    }
                })
                console.info(photoArray)
            }
            getPhotos()
        }
    })

    return (
        <div className="container__instlogin">
            <a href={URL}><i className="fab fa-instagram"></i> Logar com o instagram</a>
        </div>
    )
})

function getInstagram(access_token) {
    const token = access_token,
    num_photos = 10, // maximum 20
    container = document.getElementById( 'rudr_instafeed' ), // it is our <ul id="rudr_instafeed">
    scrElement = document.createElement( 'script' );
 
    window.mishaProcessResult = function( data ) {
        for( x in data.data ){
            container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
        }
    }
    
    scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
    document.body.appendChild( scrElement );
}