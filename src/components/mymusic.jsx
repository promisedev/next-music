import Styles from "./mymusic.module.css"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import TelegramIcon from "@mui/icons-material/Telegram";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect, useRef, useState } from "react";
import Equalizer from "./equalizer";
import Equalizer2 from "./equalizeroverlay";
import { useGlobalContext } from "../controller/context_api";
import { STATIC_PROPS_ID } from "next/dist/shared/lib/constants";
import axios from 'axios'

const Mymusic= ({props})=>{
const tag = props?.isliked;


const {dispatch,state} = useGlobalContext()

const Music = useRef(null)
const [isplaying,setIsplaying]=useState(false)
const [islike,setIslike] = useState(false)

useEffect(()=>{
setIslike(tag)
},[props])

const playMusic= ()=>{
const music = props?.music_url&&Music.current 
if(isplaying == false){
  music.play()
  setIsplaying(true)}else{
   music.pause()
  setIsplaying(false) 
  }
}
let slider_position;
let slider = useRef(null)
const [value, setValue] = useState(0)

const changeSlider=(e)=>{
  const music = props?.music_url && Music.current;
  let slider_value = slider.current;
  setValue(slider_value.value)
slider_position = music.duration * (slider_value.value / 100)
music.currentTime = slider_position;
} 

const rangeSlider=()=>{
  const music = props?.music_url&&Music.current
  let position = 0;
  if(!isNaN(music.duration)){
    position = music.currentTime * (100 /music.duration )
setValue(position)
  }
}
useEffect(()=>{
setInterval(() => {
  rangeSlider()
}, 200);
},[]) 

const addPlaylist =async(props)=>{
  dispatch({type:"ADD_PLAYLIST",payload:props});
await axios.post("/api/addplay",{
  id:props._id
})
}
const addFavorite = async(props)=>{
  setIslike(true);
  dispatch({type:"ADD_FAVORITE",payload:props});
  !islike && await axios.post("/api/addlikes",{
  id:props._id
})
}
    return (
      <article className={Styles.music_body}>
        <audio
          src={props?.music_url}
          className={Styles.music_sound}
          ref={Music}
        />
        <div className={Styles.music_control}>
          {/* --music artwork-- */}
          <div
            className={Styles.music_art}
            style={{
              backgroundImage: `url(${props?.artwork_url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              
            }}
          >
            <div className={Styles.music_art_bg}>
              <IconButton
                className={Styles.m_btns}
                onClick={() => addPlaylist(props)}
              >
                <div className={Styles.music_play} onClick={playMusic}>
                  {isplaying ? (
                    <PauseIcon className={Styles.music_play_icon} />
                  ) : (
                    <PlayArrowIcon className={Styles.music_play_icon} />
                  )}
                </div>
              </IconButton>
            </div>
          </div>
          {/* -music name-- */}
          <h3 className={Styles.music_title}>{props?.title}</h3>
          <h4 className={Styles.music_author}>
            {props?.author}
          </h4>
          <div className={Styles.music_track}>
            <input 
              type="range"
              min="0"
              max="100"
              value={value}
              className={Styles.music_track_range}
              onChange={changeSlider}
              ref={slider}
            />
            <Equalizer2 props={value} />
            <Equalizer props={value} />
          </div>
          {/* -------------------------------------- */}
          <div className={Styles.music_action}>
            <div className={Styles.music_action_btn}>
              <IconButton
                className={Styles.m_btns}
                onClick={() => addFavorite(props)}
              >
                {islike ? (
                  <FavoriteIcon className={Styles.m_btn} />
                ) : (
                  <FavoriteBorderIcon className={Styles.m_btn} />
                )}
              </IconButton>
              {islike?"Liked":"Like"}
            </div>
            {/* --------------------------------- */}
            <div className={Styles.music_action_btn}>
              <IconButton className={Styles.m_btns}>
                <TelegramIcon className={Styles.m_btn} />
              </IconButton>
              Share
            </div>
            {/* --------------------------------- */}
            <div className={Styles.music_action_btn}>
              <IconButton className={Styles.m_btns}>
                <DownloadIcon className={Styles.m_btn} />
              </IconButton>
              Download
            </div>
            {/* ------------------------------ */}
          </div>
        </div>
        {/*-------------------------------------------------  */}
        <div className={Styles.music_desc}>
          <p>
            Release date: <span>{props?.createdAt.substring(0,15)}</span>
          </p>
          <p>
            Runtime: <span>{props?.duration}</span>
          </p>
          <p>
            Genre: <span>{props?.genre}</span>
          </p>
        </div>
      </article>
    );
}

export default Mymusic