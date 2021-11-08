import React, {useEffect, useState} from 'react'
import axios from "axios"
import './../assets/scss/Home.css'
import Loader from './Loader'
import { BsFillTriangleFill } from 'react-icons/bs'

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
                                <div className="rank">
                                    <p>{ crypto.rank}</p>
                                </div>
                                <div className="img">
                                    <img src={ crypto.icon } alt={ crypto.name } />
                                </div>
                                <div className="name">
                                    <p>{ crypto.name }</p>
                                </div>
                                <div className="changePrice">
                                    { getColorChangePrice(crypto) }
                                </div>
                                <div className="price">
                                    {/* <p>{ new Intl.NumberFormat().format(crypto.price)}</p> */}
                                    { getColorPrice(crypto) }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    function getColorChangePrice(crypto) {
        if(crypto.priceChange1d > 0) {
            return (
                <>
                    <span className="triangleIconGreen"><BsFillTriangleFill /></span>
                    <p className="changePriceGreen">{ crypto.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                   <span className="triangleIconRed"><BsFillTriangleFill /></span>
                    <p className="changePriceRed">{ crypto.priceChange1d + '%' }</p>
                </>
            )
        }
    }

    function getColorPrice(crypto) {
        if(crypto.price < 10) {
            if(crypto.priceChange1d > 0) {
                return <p className="priceGreen">{ crypto.price.toFixed(8)}</p>
            } else {
                return <p className="priceRed">{ crypto.price.toFixed(8)}</p>
            }
        }
        if(crypto.priceChange1d > 0) {
            return <p className="priceGreen">{ new Intl.NumberFormat().format(crypto.price)}</p>
        } else {
            return <p className="priceRed">{ new Intl.NumberFormat().format(crypto.price)}</p>
        }
    }
}

export default Home
