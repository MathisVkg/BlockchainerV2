import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom";

const Details = () => {
    const [data, setData] = useState([])
    const { cryptoid } = useParams()

    useEffect(async () => {
        await axios.get("http://localhost:3001/details/" + cryptoid).then((resp) => {
            setData(resp.data.coin)
        })
    },[])
    console.log(data)
    return (
        <div style={{color: 'white'}}>
            {data.name}
        </div>
    )
}

export default Details
