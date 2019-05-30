import React, { useState } from 'react'

import PhotosContext from './photosContext'

const ADD_POST = 'ADD_PHOTO'
const REMOVE_POST = 'REMOVE_POST'

function postsReducer (state, action) {
	switch(action.type) {
		case ADD_POST:
			break;
		case REMOVE_POST:
			break;
		default:
			return state
	}
}

export default function({ children }) {
    const posts = {
        posts: [],
        updatePosts
    }

    function updatePosts(posts) {
        setPostsState(prevState => {
            const treatedPosts = posts.map(({ images: { thumbnail, standard_resolution }, tags }) => {
                return {
                    tags,
                    thumbnail: thumbnail.url,
                    image: standard_resolution.url
                }
            })
            return {...prevState, treatedPosts}
        })
    }

    const [postsState, setPostsState] = useState(posts)

    return (<PhotosContext.Provider value={postsState}>{children}</PhotosContext.Provider>)
}