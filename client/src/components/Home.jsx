import React, {useEffect, useState} from 'react'
import axios from "axios"
import './../assets/scss/Home.css'
import Loader from './Loader'

const Home = () => {
    const [data, setData] = useState([])
    const [conv, setConv] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data)
        })
        await axios.get("http://localhost:3001/data/convert").then((resp) => {
            setConv(resp.data)
        })
    },[])
            console.log(conv)

    if(data.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div>
            <MapCrypto />
        </div>
    )

    function MapCrypto() {
        return(
            <div className="containerCrypto">
                {
                    data.map(crypto => {
                        return(
                            <div className="card" key={ crypto.id }>
                                <p>{ crypto.name }</p>
                                <p>{ crypto.quote.USD.percent_change_24h.toFixed(2) + '%' }</p>
                                <p>{ new Intl.NumberFormat().format(crypto.quote.USD.price)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home
