import React, { useEffect, useState } from 'react'
import axios from "axios"
import './../assets/scss/Markets.scss'

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
            {/*<Ranking />*/}
            {/*<CalculateTopRanking />*/}
            {/*<CalculateDownRanking />*/}
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
                                        <p className="topName">{ topCrypto.name }</p>
                                        <p className="topValue">{ topCrypto.priceChange1d + '%'}</p>
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
                                        <p className="nameDown">{ downCrypto.name }</p>
                                        <p className="downValue">{ downCrypto.priceChange1d + '%' }</p>
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
                                <p key={ rankingCrypto.id }>{ rankingCrypto.name }</p>
                            )
                        }
                    })
                }
            </div>
        )
    }

}

export default Markets
