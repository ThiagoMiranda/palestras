import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import Instagram from '../../components/instagram'
import Carousel from '../../components/carousel'
import Loading from '../../components/loading'
import { RequestJsonp } from '../../utils'

const SEARCH_URL = 'https://api.instagram.com/v1/users/self/media/recent?max_id=1991720629583130000_6199190&count=5&access_token='

export default withRouter(function({ location: { hash } }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        if (hash) {
            const access_token = hash.replace('#access_token=', '')
            setLoading(true)
            RequestJsonp(`${SEARCH_URL}${access_token}`, ({ data }) => {
                setLoading(false)
                setData(data)
            })
        }
    }, [hash])

    return (
        <>

            { !hash && <Instagram /> }
            { loading  && <Loading /> }
            { data.length > 0 && <Carousel />}
        </>
    )
})