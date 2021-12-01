import React, { useEffect, useState } from 'react'
import axios from "axios"
import './../assets/scss/Home.scss'
import Loader from './Loader'
import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data)
        })
    },[])
    // console.log(data)
    if(data.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div>
            <TopComponent />
            <CryptoTable />
            <MapCrypto />
        </div>
    )

        // window.onscroll = function(ev) {
        //     if((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
        //         console.log('cjheck')
        //         setLimitRender( prev => prev + 100)
        //     }
        // }

    function TopComponent() {
        return(
            <div className="containerTop">
                <form className="formGroup" >
                    <label className="searchIcon"><BiSearch/></label>
                    <input type="text" className="searchInput" placeholder="Bitcoin"/>
                </form>
            </div>
        )
    }

    function CryptoTable() {
        return(
            <div className="containerTable">
                <p className="rankTable">#</p>
                <p className="nameTable">Name</p>
                <p className="changeTable">(24H)</p>
                <p className="priceTable">Price</p>
                <p className="priceBtcTable">Price Btc</p>
                <p className="volumeTable">Volume(24h)</p>
            </div>
        )
    }

    function MapCrypto() {
        return(
            <div className="containerCrypto">
                {
                    data.coins.map(crypto => {
                        return(
                            <NavLink to={`/details/${ crypto.id }`} className="cardLink" key={ crypto.id } id={ crypto.id } >
                                <div className="card">
                                    <div className="rank">
                                        <p>{ crypto.rank}.</p>
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
                                        { getColorPrice(crypto) }
                                    </div>
                                    <div className="priceBtc">
                                        <p>{ crypto.priceBtc.toFixed(8) }</p>
                                    </div>
                                    <div className="priceVolume">
                                        <p>${ numFormatter(crypto) }</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }

    function numFormatter(crypto) {
        if(crypto.volume > 999 && crypto.volume < 1000000){
            return (crypto.volume / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
        }else if(crypto.volume > 1000000 && crypto.volume < 1000000000){
            return (crypto.volume / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
        }else if(crypto.volume > 1000000000){
            return (crypto.volume / 1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion
        }else if(crypto.volume < 900){
            return crypto.volume; // if value < 1000, nothing to do
        }
    }

    function getColorChangePrice(crypto) {
        if(crypto.priceChange1d >= 0) {
            return (
                <>
                    <p className="changePriceGreen">{ crypto.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="changePriceRed">{ crypto.priceChange1d + '%' }</p>
                </>
            )
        }
    }

    function getColorPrice(crypto) {
        if(crypto.price < 10) {
            if(crypto.priceChange1d > 0) {
                return <p className="priceGreen">{ crypto.price.toFixed(6)}$</p>
            } else {
                return <p className="priceRed">{ crypto.price.toFixed(6)}$</p>
            }
        }
        if(crypto.priceChange1d > 0) {
            return <p className="priceGreen">{ new Intl.NumberFormat().format(crypto.price)}$</p>
        } else {
            return <p className="priceRed">{ new Intl.NumberFormat().format(crypto.price)}$</p>
        }
    }
}

export default Home
