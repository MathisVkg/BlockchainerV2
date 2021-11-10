import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import './../assets/scss/Home.scss'
import Loader from './Loader'
import { BsFillTriangleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

const Home = () => {
    const [data, setData] = useState([])
    const searchBar = useRef(null)

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

    function showSearch() {
        searchBar.current.classList.remove('searchOff')
        searchBar.current.classList.add('searchOn')
    }

    function closeSearch() {
        searchBar.current.classList.remove('searchOn')
        searchBar.current.classList.add('searchOff')
    }

    function TopComponent() {
        return(
            <div className="containerTop">
                <div className="searchGroup">
                    <span className="searchIcon1"><BiSearch onClick={ () => showSearch() }/></span>
                    <form className="searchOff formGroup" ref={ searchBar }>
                        <span className="searchIcon2"><BiSearch/></span>
                        <input type="text" className="searchInput" placeholder="Bitcoin"/>
                        <p onClick={ () => closeSearch() }>Cancel</p>
                    </form>
                </div>
                <div className="currency">
                    <form>
                        <select>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>PONEY</option>
                        </select>
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
                                    { getColorPrice(crypto) }
                                </div>
                            </div>
                            </NavLink>
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
