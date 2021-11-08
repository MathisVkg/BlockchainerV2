import React, {useEffect, useState} from 'react'
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data)
        })
    },[])
            console.log(data)

    return (
        <div>
            <p>home page</p>
        </div>
    )
}

export default Home
