import {useState} from "react";
import axios from "axios";

export default function SignIn() {
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

    return (
        <form style={{color: 'white'}} onSubmit={handleSubmit}>
            <label htmlFor="username">Username :</label>
            <input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username"/>
            <label htmlFor="password">Password :</label>
            <input onChange={e => setPassword(e.target.value)} type="password" id='password' name='password'/>
            <input type="submit" />
        </form>
    )
}