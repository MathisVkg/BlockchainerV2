import axios from "axios";
import {useState} from "react";
import './../../assets/scss/Sign.css'
import { FaFreebsd } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/data/register', {username, email, password})
            console.log('user created')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <ContainerInfo />
            <ContainerForm />
        </>
    )


    function ContainerInfo() {
        return (
            <div className="containerOne">
                <span className="icon"><FaFreebsd /></span>
                <p className="title">Create your account now on Blockchainer</p>
                <p className="des">The best app for see all cryptocurrencies and more</p>
                <p className="des2">Check your wallets and more !</p>
            </div>
        )
    }

    function ContainerForm() {
        return (
            <div className="containerTwo">
                <div className="error">Error</div>
                <form onSubmit={e => handleSubmit(e)} className="formSign">
                    <div className="group">
                        <label htmlFor="username" className="label username">Username</label>
                        <input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" placeholder="DarkNetMaster"/>
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="label email">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="darkXxX@gmail.com"/>
                    </div>
                    <div className="group">
                        <label htmlFor="password" className="label password">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="*********"/>
                    </div>
                    <input type="submit" className="submit"/>
                </form>
                <p className="already">Already sign ?<NavLink to="/" className="alreadySpan">Sign in here</NavLink></p>
            </div>
        )
    }
}