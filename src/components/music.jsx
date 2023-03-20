import Styles from "./music.module.css"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
;
const Music=({props})=>{

const changeBg =(e)=>{ 
    const ele = e.currentTarget;
      ele.classList.add(`${Styles.add_effect}`); 
    ele.children[0].classList.add(`${Styles.show_play}`);
}
const removechangeBg =(e)=>{
    const ele = e.currentTarget;
      ele.classList.remove(`${Styles.add_effect}`); 
    ele.children[0].classList.remove(`${Styles.show_play}`);
}



    return (
      <Link href={`/music/${props?._id}`}
        className={Styles.music_item}
        
      >
        <div
        className={Styles.music_item_bg}
        onMouseOver={changeBg}
        onClick={changeBg}
        onMouseOut={removechangeBg}
      >
        {/* ------------button to get single music-------------- */}
        <Link href={`/music/${props?._id}`} className={Styles.play}>
          <PlayArrowIcon className={Styles.play_root}/>
        </Link >
        {/* ---------------- */}
 
        
</div>
{/* ------------------------------------------------- */}
<div className={Styles.music_art} style={{backgroundImage: `url(${props?.artwork_url})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}> 
</div>
<p className={Styles.music_title}>{props?.title.substring(0,20)+"..."}</p>
<p className={Styles.music_author}>{props?.author.substring(0,25)+"..."}</p>
      </Link>
    );
}

export default Music