import {useRef} from "react"
import Styles from "./utils.module.css"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link"
const Musictable =({props})=>{

const playlists = props

//console.log(playlists)

// const btn = useRef(null)
const showPlay=(e)=>{
const btn = e.currentTarget.children[0]
btn.classList.add(`${Styles.show_btn}`)
}
const hidePlay=(e)=>{
const btn = e.currentTarget.children[0]
btn.classList.remove(`${Styles.show_btn}`)}




    return(
      <div  className={Styles.playlist_table_cont}> 
        <table className={Styles.playlist_table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th className={Styles.playlist_th_title} >Title</th>
                    <th>Genre</th>
<th>Type</th>
            <th>Duration</th>        
                    <th>Date added</th>                   
                </tr>
            </thead>
            {/* -------------------table body----------------- */}
            <tbody>
              {playlists.map((play,index)=>{

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className={Styles.playlist_td_title}>
                      <Link
                      href={`/music/${play?._id}`}
                        className={Styles.playlist_art_cont}
                        onMouseOver={showPlay}
                        onMouseOut={hidePlay}
                      >
                        <Link
                          href={`/music/${play?._id}`}
                          className={Styles.playlist_button}
                        >
                          {" "}
                          <PlayArrowIcon className={Styles.playlist_btn} />
                        </Link>
                        <div
                          className={Styles.playlist_art}
                          style={{
                            backgroundImage: `url(${play?.artwork_url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                        ></div>
                        <div className={Styles.playlist_art_desc}>
                          <h2>{play?.title}</h2>
                          <p>{play?.author}</p>
                        </div>
                      </Link>
                    </td>
                    <td>{play?.genre}</td>
                    <td>{play?.type}</td>
                    <td>{play?.duration}</td>
                    <td>{play?.added}</td>
                  </tr>
                );
              })}  
            </tbody>
        </table>
        </div>

    )
}

export default Musictable



