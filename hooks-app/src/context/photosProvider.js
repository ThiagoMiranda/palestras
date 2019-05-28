import React, { useState } from 'react'

import PhotosContext from './photosContext'

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