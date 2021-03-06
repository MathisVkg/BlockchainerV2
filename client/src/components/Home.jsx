import React, { useEffect, useState } from 'react'
import axios from "axios"
import './../assets/scss/Home.scss'
import Loader from './Loader'
import { NavLink } from 'react-router-dom'
import {FaFreebsd} from "react-icons/fa";

const Home = () => {
    const [data, setData] = useState([])
    const [timer, setTimer] = useState(false)
    let timerLoader

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data)
        })
        timerLoader = setTimeout( () => {
            setTimer(true)
        }, 1000)
    },[])

    if(!timer) {
        return (
            <Loader />
        )
    } else {
        return (
            <div>
                <div className="componentGlobal">
                    <div className="componentLeft">
                        <div className="descriptionProduct">
                            <span className="homeIcon"><FaFreebsd /></span>
                            <div className="textGroup">
                                <p className="title">Welcome to Blockchainer !</p>
                                <p className="description">The number one crypto tracker. With Blockchainer, you can manage
                                    all of your crypto assets from a single interface</p>
                            </div>
                        </div>
                        <TopComponent />
                    </div>
                    <div className="componentRight">
                        <CardRanking />
                    </div>
                </div>
                <CryptoTable />
                <MapCrypto />
            </div>
        )
    }

        // window.onscroll = function(ev) {
        //     if((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
        //         console.log('check')
        //         setLimitRender( prev => prev + 100)
        //     }
        // }

    function CardRanking() {
        return (
            <div className="containerCardRanking">
                {
                    data.coins.map(crypto => {
                        if(crypto.rank < 4) {
                            return (
                                <NavLink to={`/details/${ crypto.id }`} className="cardRankingSet" key={ crypto.id + "key" }>
                                    <div className="cardInfoRanking">
                                        <img src={ crypto.icon } alt={ crypto.name } />
                                        <div className="divClose">
                                            <p className="rank">{ crypto.rank }.</p>
                                            <p className="name">{ crypto.name }</p>
                                        </div>
                                        <div className="divOpen">
                                            <p className="rank">{ crypto.rank }.</p>
                                            <p className="name">{ crypto.name }</p>
                                        </div>
                                    </div>
                                    <div className="priceBtc">
                                        <p className="priceDes">Price Btc:</p>
                                        <p>{ crypto.priceBtc.toFixed(8) }</p>
                                    </div>
                                    <div className="priceVolume">
                                        <p className="priceDes">Volume(24H):</p>
                                        <p>${ numFormatter(crypto) }</p>
                                    </div>
                                    <div className="changePrice">
                                        <p className="priceDes">Change(1d):</p>
                                        <p>{ getColorChangePrice(crypto) }</p>
                                    </div>
                                    <div className="price">
                                        <p className="priceDes">Price:</p>
                                        { getColorPrice(crypto) }
                                    </div>
                                </NavLink>
                            )
                        }
                        else {
                            return <></>
                        }
                    })
                }
            </div>
        )
    }

    function TopComponent() {
        return(
            <div className="containerTop">
                <form className="formGroup" >
                    <input type="text" className="searchInput" placeholder="Bitcoin"/>
                    <label className="searchIcon"><span>GO</span></label>
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
            </div>
        )
    }

    function MapCrypto() {
        return(
            <div className="containerCrypto">
                {
                    data.coins.map(crypto => {
                        if(crypto.rank < 4) {
                            return (
                                <NavLink to={`/details/${ crypto.id }`} className="cardLink" key={ crypto.id + "keyop" } id={ crypto.id } >
                                    <div className="trioCard">
                                        <div className="desktopGroup">
                                            <div className="rank">
                                                <p>{ crypto.rank}.</p>
                                            </div>
                                            <div className="img">
                                                <img src={ crypto.icon } alt={ crypto.name } />
                                            </div>
                                            <div className="name">
                                                <p>{ crypto.name.substring(0, 10) }</p>
                                            </div>
                                            <div className="changePrice">
                                                { getColorChangePrice(crypto) }
                                            </div>
                                        </div>
                                        <div className="price">
                                            <p className="priceDes">Price:</p>
                                            { getColorPrice(crypto) }
                                        </div>
                                        <div className="priceBtc">
                                            <p className="priceDes">Price Btc:</p>
                                            <p>{ crypto.priceBtc.toFixed(8) }</p>
                                        </div>
                                        <div className="priceVolume">
                                            <p className="priceDes">Volume(24H):</p>
                                            <p>${ numFormatter(crypto) }</p>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        } else {
                            return (
                                <NavLink to={`/details/${ crypto.id }`} className="cardLink" key={ crypto.id } id={ crypto.id } >
                                    <div className="card">
                                        <div className="desktopGroup">
                                            <div className="rank">
                                                <p>{ crypto.rank}.</p>
                                            </div>
                                            <div className="img">
                                                <img src={ crypto.icon } alt={ crypto.name } />
                                            </div>
                                            <div className="name">
                                                <p>{ crypto.name.substring(0, 10) }</p>
                                            </div>
                                            <div className="changePrice">
                                                { getColorChangePrice(crypto) }
                                            </div>
                                        </div>
                                        <div className="price">
                                            <p className="priceDes">Price:</p>
                                            { getColorPrice(crypto) }
                                        </div>
                                        <div className="priceBtc">
                                            <p className="priceDes">Price Btc:</p>
                                            <p>{ crypto.priceBtc.toFixed(8) }</p>
                                        </div>
                                        <div className="priceVolume">
                                            <p className="priceDes">Volume(24H):</p>
                                            <p>${ numFormatter(crypto) }</p>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }
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
