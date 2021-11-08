import React, {useEffect, useState} from 'react'
import axios from "axios"
import './../assets/scss/Home.css'
import Loader from './Loader'

const Home = () => {
    const [data, setData] = useState([])
    const [conv, setConv] = useState([])
    const [limitRender, setLimitRender] = useState(100)

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            // console.log(resp)
            setData(resp.data)
        })
        // await axios.get("http://localhost:3001/data/convert").then((resp) => {
        //     setConv(resp.data)
        // })
    },[])
            console.log(data)

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

        // window.onscroll = function(ev) {
        //     if((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
        //         console.log('cjheck')
        //         setLimitRender( prev => prev + 100)
        //     }
        // }

    function MapCrypto() {
        return(
            <div className="containerCrypto">
                {
                    data.coins.map(crypto => {
                        return(
                            <div className="card" key={ crypto.id }>
                                <p>{ crypto.name }</p>
                                <p>{ crypto.priceChange1d + '%' }</p>
                                <p>{ new Intl.NumberFormat().format(crypto.price)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home
