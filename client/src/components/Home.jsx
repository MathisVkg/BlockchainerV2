import React, {useEffect} from 'react'
import axios from "axios";

const Home = () => {
    function fetch() {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?X-CMC_PRO_API_KEY=42501420-56b2-4d9d-862f-d46a4bcf6dac', {
            headers: { 'X-CMC_PRO_API_KEY': '42501420-56b2-4d9d-862f-d46a4bcf6dac' }
        })
            .then(res => {
                console.log(res)
            });
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <p>home page</p>
        </div>
    )
}

export default Home
