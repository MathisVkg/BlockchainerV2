import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './../assets/scss/User.scss'
import axios from "axios";

const User = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/sign-in', {username, password})
        } catch (err) {
            console.log(err)
        }
    }


    function FirstInfo() {
        return (
            <div className="infoGroup">
                <h2 className="title">Please connect your account</h2>
                <p className="desUser">Blockainer is committed to protecting your data and not using it for commercial purposes</p>
            </div>
        )
    }

    //if() {
    return(
        <div className="container">
            <FirstInfo />
            <form style={{color: 'white'}} onSubmit={handleSubmit}>
                <div className="group">
                    <label htmlFor="username" className="label username">Username</label>
                    <input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" placeholder="darkCryptor"/>
                </div>
                <div className="group">
                    <label htmlFor="password" className="label password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id='password' name='password' placeholder="********"/>
                </div>
                <input type="submit" className="submitButton" />
            </form>
            <p className="alreadyAccount">You don't have account ?<NavLink to="/sign-up" className="alreadyAccountSpan">Sign up here</NavLink></p>
        </div>
    )
    //} else
}

export default User
