import { createContext } from 'react'

export default createContext({
    posts: [{
        thubmnail: '',
        image: '',
        tags: ''
    }],
    updatePosts: posts => {}
})