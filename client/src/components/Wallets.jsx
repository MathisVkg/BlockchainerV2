import React from 'react'
import './../assets/scss/Wallets.scss'

const Wallets = () => {
    return (
        <div className="walletContainer">
            apiKey<input type="text" name="apiKey"/>
            secretKey<input type="text" name="secretKey"/>
        </div>
    )
}

export default Wallets
