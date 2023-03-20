import { useEffect, useState } from "react";
import { ArrowBackIos, MusicNote, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Styles from "./utils.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlaylistTable from "./playlisttable";
import { useRouter } from "next/router";
import Searches from './search'
 

const Playlist = ({props}) => {
 
  const [plays, setPlays] = useState([]);
const history = useRouter();
const Back = () => {
  history.push("/");
};
  useEffect(() => {
    setPlays(props);
  }, [props]);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };

  const [query,setQuery]= useState('');

const submitSearch= async(e)=>{
e.preventDefault();

history.push(`/music/searches?q=${query}`)
 
}


  return (
    <article className={Styles.overlays}>
      <Searches props={"rgb(24, 10, 29)"} />
      {/* -------------header------- */}
      <section className={Styles.overlays_header}>
        <IconButton className={Styles.overlays_button} onClick={Back}>
          <ArrowBackIos className={Styles.overlays_arrow} />
        </IconButton>
        <div className={Styles.overlays_img}>
          <span>
            <PlayArrowIcon className={Styles.overlays_play} />
          </span>{" "}
          Playlist
        </div>
      </section>
      {/* --------------play desc---------------------------- */}
      <section className={Styles.play_modal}>
        <div className={Styles.play_card}>
          <MusicNote className={Styles.play_card_icon} />
        </div>
        <div className={Styles.play_desc}>
          <p>My Playlist</p>
        </div>
      </section>
      {/* ----------------playlist cont------------------------------------ */}

      <section className={Styles.playlist_cont}>
        <article className={Styles.playlist_body}>
          {plays.length > 0 ? (
            <PlaylistTable props={plays} />
          ) : (
            <div className={Styles.playlist_form}>
              <p>No songs yet? lets fix your playlist.</p>
              <form onSubmit={submitSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search for songs"
                  onChange={(e)=>setQuery(e.target.value)}
                />
                <button onClick={submitSearch}>
                  <Search className={Styles.playlist_form_btn} />
                </button>
              </form>
            </div>
          )}
        </article>
      </section>
    </article>
  );
};

export default Playlist;
