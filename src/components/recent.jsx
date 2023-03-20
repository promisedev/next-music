import Styles from "./recent.module.css";
import {useState,useEffect} from 'react';
import Music from "./music";

const Recent = ({ props }) => {
const [music,setMusic]= useState([]) 

useEffect(()=>{
    const sorted = props.map((obj) => {
  return {...obj, postedAt: new Date(obj.postedAt)};
}).sort((a, b) => Number(b.postedAt) - Number(a.postedAt))
.filter((prop,index)=>{
    if(index<=4){return prop}
});

setMusic(sorted)
},[props])

  
  return (
    <article className={Styles.music_recent}>
      <div className={Styles.music_title}>Recently Added</div>
      <div className={Styles.music_body}>
        {music.map((music, index) => {
          return <Music key={index} props={music} />;
        })}
      </div>
    </article>
  );
};

export default Recent;
