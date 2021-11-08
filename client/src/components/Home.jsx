import React, {useEffect, useState} from 'react'
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([])
    const [conv, setConv] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data)
        })
        await axios.get("http://localhost:3001/data/convert").then((resp) => {
            setConv(resp.data)
        })
    },[])
            console.log(conv)

    return (
        <div>
            <p>home page</p>
        </div>
    )
}

export default Home
