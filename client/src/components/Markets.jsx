import React, { useEffect, useState } from 'react'
import axios from "axios";

const Markets = () => {
    const [data, setData] = useState([])
    useEffect(async () => {
        await axios.get("http://localhost:3001/data").then((resp) => {
            setData(resp.data)
            console.log('2', data)
        })
    },[])

    return (
        <div>
            markets
        </div>
    )
}

export default Markets
