import React, {useEffect, useState} from 'react'
import './../assets/scss/Wallets.scss'
import axios from "axios";

const Wallets = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/wallets").then((resp) => {
            setData(resp)
        })
    },[])
    console.log(data)
    return (
        <div className="walletContainer">
            apiKey<input type="text" name="apiKey"/>
            secretKey<input type="text" name="secretKey"/>
        </div>
    )
}

export default Wallets
