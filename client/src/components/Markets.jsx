import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import './../assets/scss/Markets.scss'
import { NavLink } from 'react-router-dom'

const Markets = () => {
    const [data, setData] = useState([])
    let topNumber = 0
    let downNumber = 0
    let rankButton = useRef(null)
    let topButton = useRef(null)
    let downButton = useRef(null)

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data.coins)

        })
    },[])
    console.log(data)

    return (
        <div className="marketBody">
            <DisplayButton />
            <Ranking />
            <CalculateTopRanking />
            <CalculateDownRanking />
        </div>
    )

    function DisplayButton() {
        return (
            <div className="buttonContainer">
                <button className="rankButton" onClick={ () => DisplayRank() }>Ranking</button>
                <button className="bestButton" onClick={ () => DisplayTop() }>Best change</button>
                <button className="worstButton" onClick={ () => DisplayDown() }>Worst change</button>
            </div>
        )
    }

    function DisplayRank() {
        rankButton.current.classList.remove('inactiveMarket')
        rankButton.current.classList.add('activeMarket')

        topButton.current.classList.remove('activeMarket')
        topButton.current.classList.add('inactiveMarket')

        downButton.current.classList.remove('activeMarket')
        downButton.current.classList.add('inactiveMarket')
    }
    function DisplayTop() {
        topButton.current.classList.remove('inactiveMarket')
        topButton.current.classList.add('activeMarket')

        rankButton.current.classList.remove('activeMarket')
        rankButton.current.classList.add('inactiveMarket')

        downButton.current.classList.remove('activeMarket')
        downButton.current.classList.add('inactiveMarket')
    }
    function DisplayDown() {
        downButton.current.classList.remove('inactiveMarket')
        downButton.current.classList.add('activeMarket')

        topButton.current.classList.remove('activeMarket')
        topButton.current.classList.add('inactiveMarket')

        rankButton.current.classList.remove('activeMarket')
        rankButton.current.classList.add('inactiveMarket')
    }


    function CalculateTopRanking() {
        return (
            <div className="containerTopChange inactiveMarket" ref={ topButton }>
                {
                    data.map(topCrypto => {
                        if(topNumber < 10) {
                            if(topCrypto.priceChange1d > 10) {
                                topNumber++
                                return (
                                    <div className="topCard" key={ topCrypto.id + topNumber }>
                                        <img src={ topCrypto.icon} alt={ topCrypto.name } className="topIcon"/>
                                        <p className="topName">{ topCrypto.name }<span className="nameTopSpan">/USDT</span></p>
                                        <p className="topPrice">{ new Intl.NumberFormat().format(topCrypto.price) }$</p>
                                        <p className="topPriceGreen">{ topCrypto.priceChange1d + '%' }</p>
                                    </div>
                                )
                            }
                        } else {
                            return <></>
                        }
                    })
                }
            </div>
        )
    }

    function CalculateDownRanking() {
        return (
            <div className="containerDownChange inactiveMarket" ref={ downButton }>
                {
                    data.map(downCrypto => {
                        if(downNumber < 10) {
                            if(downCrypto.priceChange1d < -10) {
                                downNumber++
                                return (
                                    <div className="downCard" key={ downCrypto.id + downNumber }>
                                        <img src={ downCrypto.icon} alt={ downCrypto.name } className="downIcon"/>
                                        <p className="downName">{ downCrypto.name}<span className="nameDownSpan">/USDT</span></p>
                                        <p className="downPrice">{ new Intl.NumberFormat().format(downCrypto.price) }$</p>
                                        <p className="downPriceRed">{ downCrypto.priceChange1d + '%' }</p>
                                    </div>
                                )
                            }
                        } else {
                            return <></>
                        }
                    })
                }
            </div>
        )
    }

    function Ranking() {
        return (
            <div className="containerRanking activeMarket" ref={ rankButton }>
                {
                    data.map(rankingCrypto => {
                        if(rankingCrypto.rank <= 10)
                        {
                            return (
                                <NavLink to={`/details/${ rankingCrypto.id }`} key={ rankingCrypto.id } className="linkMarket">
                                    <div className="rankingCard">
                                        <p className="rankNumber">#{ rankingCrypto.rank }</p>
                                        <img className="rankIcon" src={ rankingCrypto.icon } alt={ rankingCrypto.name }/>
                                        <p className="rankName">{ rankingCrypto.name }</p>
                                        <p className="rankPrice">{ new Intl.NumberFormat().format(rankingCrypto.price) }$</p>
                                        { getColorChangePriceRank(rankingCrypto) }
                                    </div>
                                </NavLink>
                            )
                        }
                    })
                }
            </div>
        )
    }


    function getColorChangePriceRank(rankingCrypto) {
        if(rankingCrypto.priceChange1d >= 0) {
            return (
                <>
                    <p className="rankPriceGreen">{ rankingCrypto.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="rankPriceRed">{ rankingCrypto.priceChange1d + '%' }</p>
                </>
            )
        }
    }





}

export default Markets
