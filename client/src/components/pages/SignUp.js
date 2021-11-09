import axios from "axios";
import {useState} from "react";

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
        <div>
            <div>Error</div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="username">username :</label>
                <input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username"/>
                <label htmlFor="email" >email :</label>
                <input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email"/>
                <label htmlFor="password">password :</label>
                <input onChange={e => setPassword(e.target.value)} type="password" id="password" name="password"/>
                <input type="submit"/>
            </form>
        </div>
    )
}