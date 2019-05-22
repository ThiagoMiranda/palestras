import React from 'react'

import './instagram.css'

const URL = 'https://www.instagram.com/oauth/authorize/?client_id=f55d14ef132f4be98c3cb1fac31edde4&redirect_uri=http://localhost:3000/carousel&response_type=token&scope=public_content'

export default function() {
    return (
        <div className="container__instlogin">
            <a href={URL}><i className="fab fa-instagram"></i> Logar com o instagram</a>
        </div>
    )
}