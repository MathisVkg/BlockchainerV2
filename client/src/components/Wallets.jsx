import React, {useEffect, useState} from 'react'
import './../assets/scss/Wallets.scss'
import axios from "axios";
import Loader from './Loader'

const Wallets = () => {
    const [apiKey, setApiKey] = useState('')
    const [apiSecret, setApiSecret] = useState('')
    const [data, setData] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/wallets").then((resp) => {
            setData(resp.data.balances)
        })
    },[])

    if(data === 0) {
        return (
            <div>
                <GetApiInfo />
                <FormConnection />
            </div>
        )
    } else {
        return (
            <div>
                <p>coucou</p>
                {/* <GetCryptoWallet /> */}
            </div>
        )
    }  
    

    function GetApiInfo() {
        return (
            <div className="walletContainer">
                <h2 className="title">Link your Binance account for get your wallet data</h2>
                <p className="des">Please go on Binance and create a API key. After introduce
                your information in correct field</p>
            </div>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/wallets/data', {apiKey, apiSecret})
        } catch (err) {
            console.log(err)
        }
    }

    function FormConnection() {
        return (
            <form onSubmit={handleSubmit} className="apiForm">
                <div className="group">
                    <label htmlFor="username" className="label username">API key</label>
                    <input onChange={e => setApiKey(e.target.value)} value={apiKey} type="text" id="APIKey" name="APIKey" placeholder="API key"/>
                </div>
                <div className="group">
                    <label htmlFor="password" className="label password">Secret key</label>
                    <input onChange={e => setApiSecret(e.target.value)} value={apiSecret} type="text" id='secretKey' name='secretKey' placeholder="API secret key"/>
                </div>
                <input type="submit" className="submitButton"/>
            </form>
        )
    }

    function GetCryptoWallet() {
        // if(data){
        //     data.balances.map(userCrypto => {
        //         if(userCrypto.free <= 0) {
        //             return <></>
        //         } else {
        //             return (
        //                 <div>
        //                     <p>{ userCrypto.asset }</p>
        //                     <p>{ userCrypto.free }</p>
        //                 </div>
        //             )
        //         }
        //     })
        // }
    }
}

export default Wallets
