import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom"
import './../../assets/scss/Details.scss'
import { BsFillTriangleFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Details = () => {
    const [data, setData] = useState([])
    const { cryptoid } = useParams()

    useEffect(async () => {
        await axios.get("http://localhost:3001/details/" + cryptoid).then((resp) => {
            setData(resp.data.coin)
        })
    },[])
    console.log(data)
    return (
        <div>
            <FirstComponent />
            <PriceAverage />
            <MarketCap />
            { CheckSupply() }
            <CircularBar />
        </div>
    )

    function CheckSupply() {
        if(data.totalSupply !== 0) {
            return(
                <h2 className="insights">Insights</h2>
            )
        }
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
                    <h2 className="price">${ new Intl.NumberFormat().format(data.price)}</h2>
                    <div className="changePriceDetails">
                        { getColorChangePrice() }
                    </div>
                </div>
            </div>
        )
    }

    function getColorChangePrice() {
        if(data.priceChange1d > 0) {
            return (
                <>
                    <span className="triangleIconGreenDetails"><BsFillTriangleFill /></span>
                    <p className="changePriceGreenDetails">{ data.priceChange1d + '%' }</p>
                </>
            )
        } else {
            return (
                <>
                    <span className="triangleIconRedDetails"><BsFillTriangleFill /></span>
                    <p className="changePriceRedDetails">{ data.priceChange1d + '%' }</p>
                </>
            )
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
                    <p className="marketPrice">{ new Intl.NumberFormat().format(data.marketCap) }</p>
                </div>
                <div className="marketGroup">
                    <p className="marketTitle">
                        Volume in 24h
                        <span className="infoIcon"><AiOutlineInfoCircle /></span>
                    </p>
                    <p className="marketPrice">{ new Intl.NumberFormat().format(data.volume) }</p>
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
}

export default Details
