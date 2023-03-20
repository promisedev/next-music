


import Styles from "./recent.module.css";
import {useState,useEffect} from 'react';
import Music from "./music";
import {useGlobalContext} from "../controller/context_api"
const Recent = () => {
const {state} = useGlobalContext();
const props =  state.playlist;
const [music,setMusic]= useState([]);

useEffect(()=>{
    const sorted = props.map((obj) => {
  return {...obj, postedAt: new Date(obj.postedAt)};
}).sort((a, b) => Number(b.postedAt) - Number(a.postedAt))
.filter((prop,index)=>{
    if(index<=4){return prop}
});

setMusic(sorted)
},[props,state])

  
  return (
   music.length>0 && (  <article className={Styles.music_plays}>
      <div className={Styles.music_title}>Recently Played</div>
      <div className={Styles.music_body}>
        {music.map((music, index) => {
          return <Music key={index} props={music} />;
        })}
      </div>
    </article>)
  );
};

export default Recent;
