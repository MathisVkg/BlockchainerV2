import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom"
import './../../assets/scss/Details.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {
    CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import Loader from './../Loader'

const Details = () => {
    const [data, setData] = useState([])
    const { cryptoid } = useParams()
    const [timer, setTimer] = useState(false)
    let timerLoader

    useEffect(async () => {
        await axios.get("http://localhost:3001/details/" + cryptoid).then((resp) => {
            setData(resp.data.coin)
        })
        timerLoader = setTimeout( () => {
            setTimer(true)
        }, 1500)
    },[])

    if(!timer) {
        return (
            <Loader />
        )
    } else {
        return (
            <div className="rootDetails">
                <div className="detailsFirstContainer">
                    <FirstComponent />
                    <PriceAverage />
                </div>
                <MarketCap />
                <div className="detailsSecondContainer">
                    <h2 className="insights">Insights</h2>
                    <BonusInfo />
                </div>
                <GetLink />
            </div>
        )
    }



    function FirstComponent() {
        return (
            <div className="containerDetails">
                <img src={ data.icon } alt={ data.name } className="icon"/>
                <h2 className="title">
                    { data.name }
                    <span className="titleSpan">({ data.symbol })</span>
                </h2>
                <p className="rank">#{ data.rank }</p>
            </div>
        )
    }

    function PriceAverage() {
        return (
            <div className="priceContainer">
                <h2 className="titlePrice">Price of market</h2>
                <div className="group">
                    { GetPrice() }
                    <div className="changePriceDetails">
                        { getColorChangePrice() }
                    </div>
                </div>
            </div>
        )
    }

    function GetPrice() {
        if(data.price < 10) {
            return <h2 className="price">{ '$' + data.price.toFixed(8)}</h2>
        } else {
            return <h2 className="price">{ '$' + new Intl.NumberFormat().format(data.price)}</h2>
        }
    }

    function MarketCap() {
        return (
            <div className="marketContainer">
                <div className="marketGroup">
                    <p className="marketTitle">
                        Market capitalization
                        <span className="infoIcon"><AiOutlineInfoCircle /></span>
                    </p>
                    <p className="marketPrice">{ '$' + new Intl.NumberFormat().format(data.marketCap) }</p>
                </div>
                <div className="marketGroup">
                    <p className="marketTitle">
                        Volume in 24h
                        <span className="infoIcon"><AiOutlineInfoCircle /></span>
                    </p>
                    <p className="marketPrice">{ '$' + new Intl.NumberFormat().format(data.volume) }</p>
                </div>
                <div className="marketGroup">
                    <p className="marketTitle">
                        Volume in circulation
                        <span className="infoIcon"><AiOutlineInfoCircle /></span>
                    </p>
                    <p className="marketPrice">{ new Intl.NumberFormat().format(data.availableSupply) }</p>
                </div>
                { AllSupply() }
            </div>
        )
    }

    function AllSupply() {
        if(data.totalSupply !== 0) {
            return (
                <div className="marketGroup">
                    <p className="marketTitle">
                        All supply
                        <span className="infoIcon"><AiOutlineInfoCircle /></span>
                    </p>
                    <p className="marketPrice">{ new Intl.NumberFormat().format(data.totalSupply) }</p>
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }

    function BonusInfo() {
        return (
            <div className="bonusContainer">
                <div className="averagePrice">
                    <div className="priceGroup">
                        <p className="priceTitle">Price change 1D</p>
                        {/*<p className="priceDay">{ data.priceChange1d }</p>*/}
                        { getColorChangePrice() }
                    </div>
                    <div className="priceGroup">
                        <p className="priceTitle">Price change 1H</p>
                        {/*<p className="priceHour">{ data.priceChange1h }</p>*/}
                        { getColorChangePrice1H() }
                    </div>
                    <div className="priceGroup">
                        <p className="priceTitle">Price change 1W</p>
                        {/*<p className="priceWeek">{ data.priceChange1w }</p>*/}
                        { getColorChangePrice1W() }
                    </div>
                </div>
                <CircularBar />
            </div>
        )
    }

    function CircularBar() {
        const result = Math.trunc(100 * data.availableSupply / data.totalSupply);
        if(data.totalSupply !== 0) {
            return (
                <div className="circularGroup">
                    <p className="circularTitle">All supply pourcentage</p>
                    <CircularProgressbar
                        value={result}
                        text={`${result}%`}
                        background
                        backgroundPadding={6}
                        strokeWidth={5}
                    />
                </div>
            )
        } else {
            return(
                <></>
            )
        }
    }

    function getColorChangePrice() {
        if(data.priceChange1d >= 0) {
            return (
                <>
                    <p className="changePriceGreenDetails">{ data.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="changePriceRedDetails">{ data.priceChange1d + '%' }</p>
                </>
            )
        }
    }

    function getColorChangePrice1H() {
        if(data.priceChange1h >= 0) {
            return (
                <>
                    <p className="changePriceGreenDetails">{ data.priceChange1h + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="changePriceRedDetails">{ data.priceChange1h + '%' }</p>
                </>
            )
        }
    }

    function getColorChangePrice1W() {
        if(data.priceChange1w >= 0) {
            return (
                <>
                    <p className="changePriceGreenDetails">{ data.priceChange1w + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <p className="changePriceRedDetails">{ data.priceChange1w + '%' }</p>
                </>
            )
        }
    }

    function GetLink() {
        return (
            <div className="linkContainer">
                <h2 className="linkTitle">Explore</h2>
                <p className="linkDes">Get more information or actulaty about <span className="linkDesSpan">{ data.name }</span></p>
                <a href={ data.websiteUrl } className="link websiteUrl" target="_blank">{ data.websiteUrl }</a>
                <a href={ data.twitterUrl } className="link twitterUrl" target="_blank">{ data.twitterUrl }</a>
            </div>
        )
    }
}

export default Details
