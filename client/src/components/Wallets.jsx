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

    // if() {
        return (
            <div>
                <GetApiInfo />
                <FormConnection />
            </div>
        )
    // } else {
    //     return (
    //         <div>
    //             coucou
    //         </div>
    //     )
    // }

    function GetApiInfo() {
        return (
            <div className="walletContainer">
                <h2 className="title">Link your Binance account for get your wallet data</h2>
                <p className="des">Please go on Binance and create a API key. After introduce
                your information in correct field</p>
            </div>
        )
    }
    
    function FormConnection() {
        return (
            <form className="apiForm">
                <div className="group">
                    <label htmlFor="username" className="label username">API key</label>
                    <input type="text" id="APIKey" name="APIKey" placeholder="API key"/>
                </div>
                <div className="group">
                    <label htmlFor="password" className="label password">Secret key</label>
                    <input type="text" id='secretKey' name='secretKey' placeholder="API secret key"/>
                </div>
                <input type="submit" className="submitButton"/>
            </form>
        )
    }
}

export default Wallets
