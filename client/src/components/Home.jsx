import React, { useEffect, useState, useRef } from 'react'
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

    if(data.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div>
            <TopComponent />
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
                <div className="searchGroup">
                    <form className="formGroup" >
                        <label className="searchIcon"><BiSearch/></label>
                        <input type="text" className="searchInput" placeholder="Bitcoin"/>
                    </form>
                </div>
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
                                {/*<div className="cardGroupOne">*/}
                                    <div className="rank">
                                        <p>{ crypto.rank}.</p>
                                    </div>
                                    <div className="img">
                                        <img src={ crypto.icon } alt={ crypto.name } />
                                    </div>
                                    <div className="name">
                                        <p>{ crypto.name }</p>
                                    </div>
                                {/*</div>*/}
                                {/*<div className="cardGroupTwo">*/}
                                    <div className="changePrice">
                                        { getColorChangePrice(crypto) }
                                    </div>
                                    <div className="price">
                                        { getColorPrice(crypto) }
                                    </div>
                                {/*</div>*/}
                            </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
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
