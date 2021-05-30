import React,{useEffect,useState} from 'react'
import {imageUrl,API_KEY} from '../../constants/constant'
import axios from '../../Axios'
import './RowPost.css'
import YouTube from 'react-youtube'
const RowPost = ({title,isSmall,url}) => {
    const [rows, setRows] = useState([])
    const [youtubeTrailer,setYoytubeTrailer]=useState('')
    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response.data);
            setRows(response.data.results)

        }).catch((err)=>{
            console.log('error=',err);

        })

    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    };
    const onTrailerLoading= (id) =>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length !==0){
                setYoytubeTrailer(response.data.results[0])
            }else{
                console.log('empty');
            }

        })
       

    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {
                    rows.map((obj)=> <img onClick={()=>onTrailerLoading(obj.id)} className={isSmall ?'smallPoster' :"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="" srcset="" />
     
                    )
                }
               
            </div>
          { youtubeTrailer && <YouTube videoId={youtubeTrailer.key} opts={opts}/>}
        </div>
    )
}

export default RowPost
