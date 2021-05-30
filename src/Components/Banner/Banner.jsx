import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constant'
import axios from '../../Axios'
import './Banner.css'
const Banner = () => {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results);
            setMovie(response.data.results[ Math.floor(Math.random() * response.data.results.length-1)])
        })

    },[])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="banner">
            
            <div className="content">
                <h1 className="movie-title">{movie ? movie.title : ''}</h1>
                <div className="baner-button">
                    <button className="btn">PLAY </button>
                    <button className="btn">MY-LIST</button>
                </div>
                <h1 className="discription">{movie ? movie.overview : " "}</h1>
            </div>
           <div className="fade-bottom">

           </div>
        </div>
    )
}

export default Banner
