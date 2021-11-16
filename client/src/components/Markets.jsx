import React, { useEffect, useState } from 'react'
import axios from "axios"
import './../assets/scss/Markets.scss'
import {BsFillTriangleFill} from "react-icons/bs";

const Markets = () => {
    const [data, setData] = useState([])
    let topNumber = 0
    let downNumber = 0

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data.coins)

        })
    },[])
    console.log(data)

    return (
        <div>
            <Ranking />
            <CalculateTopRanking />
            <CalculateDownRanking />
        </div>
    )

    function CalculateTopRanking() {
        return (
            <div className="containerTopChange">
                {
                    data.map(topCrypto => {
                        if(topNumber < 10) {
                            if(topCrypto.priceChange1d > 10) {
                                topNumber++
                                return (
                                    <div className="topCard" key={ topCrypto.id + topNumber }>
                                        <p className="topName">{ topCrypto.name }<span className="nameTopDown">/USDT</span></p>
                                        <p className="downPrice">{ new Intl.NumberFormat().format(topCrypto.price) }$</p>
                                        { getColorChangePriceTop(topCrypto) }
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
            <div className="containerDownChange">
                {
                    data.map(downCrypto => {
                        if(downNumber < 10) {
                            if(downCrypto.priceChange1d < -10) {
                                downNumber++
                                return (
                                    <div className="downCard" key={ downCrypto.id + downNumber }>
                                        <p className="nameDown">{ downCrypto.name}<span className="nameDownSpan">/USDT</span></p>
                                        <p className="downPrice">{ new Intl.NumberFormat().format(downCrypto.price) }$</p>
                                        { getColorChangePriceDown(downCrypto) }
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
            <div className="containerRanking">
                {
                    data.map(rankingCrypto => {
                        if(rankingCrypto.rank <= 10)
                        {
                            return (
                                <div className="rankingCard" key={ rankingCrypto.id }>
                                    <p className="rankNumber">#{ rankingCrypto.rank }</p>
                                    <img className="rankIcon" src={ rankingCrypto.icon } alt={ rankingCrypto.name }/>
                                    <p className="rankName">{ rankingCrypto.name }</p>
                                    <p className="rankPrice">{ new Intl.NumberFormat().format(rankingCrypto.price) }$</p>
                                    { getColorChangePriceRank(rankingCrypto) }
                                </div>
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

    function getColorChangePriceTop(topCrypto) {
        if(topCrypto.priceChange1d >= 0) {
            return (
                <>
                    <p className="topPriceGreen">{ topCrypto.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="topPriceRed">{ topCrypto.priceChange1d + '%' }</p>
                </>
            )
        }
    }

    function getColorChangePriceDown(downCrypto) {
        if(downCrypto.priceChange1d >= 0) {
            return (
                <>
                    <p className="downPriceGreen">{ downCrypto.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="downPriceRed">{ downCrypto.priceChange1d + '%' }</p>
                </>
            )
        }
    }



}

export default Markets
