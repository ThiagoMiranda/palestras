import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import Instagram from '../../components/instagram'
import CarouselClass from '../../components/carousel/carouselclass'
import Loading from '../../components/loading'
import { RequestJsonp } from '../../utils'

const SEARCH_URL = 'https://api.instagram.com/v1/users/self/media/recent?max_id=1991720629583130000_6199190&countn=5&access_token='

export default withRouter(function({ location: { hash } }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        let ignore = false
        if (hash) {
            const access_token = hash.replace('#access_token=', '')
            setLoading(true)
            RequestJsonp(`${SEARCH_URL}${access_token}`, ({ data }) => {
                if (!ignore) {
                    setLoading(false)
                    setData(data)
                }
            })
            return () => { ignore = true }
        }
    }, [hash])

    return (
        <>

            { !hash && data.length === 0 && <Instagram /> }
            { loading  && <Loading /> }
            { data.length > 0 && <CarouselClass data={data} />}
        </>
    )
})