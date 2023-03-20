import Styles from "./search.module.css";
import Header from "./headers"; 
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Music from './music'
import { useGlobalContext } from "../controller/context_api";
import SearchLoad from './searchload'

const MusicSearch = ({props}) => {
const [query, setQuery] = useState('');
const {searching} = useGlobalContext();
const router =useRouter();

const submitSearch = (e) => {
  e.preventDefault();
  router.push(`/music/searches?q=${query}`);
};

  return (
    <section className={Styles.search}>
      <article className={Styles.search_hero}>
        <Header />
        <div className={Styles.hero_txt_cont}>
          <div className={Styles.hero_txt}>
            Discover more music when you make a search
          </div>
          <div className={Styles.hero_search}>
            <form>
              <input
                type="text"
                name="search"
                placeholder="what music are you looking for...?"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                onClick={submitSearch}
                style={{ cursor: "pointer" }}
              >
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </article>
      {/* ---------------------------------------- */}
      {props?.length > 0 ? (
        <article className={Styles.more_search}>
          {props?.map((music, index) => {
            return <Music key={index} props={music}/>;
          })}
        </article>
      ) : (searching?(
        <SearchLoad/>
      ):(
<article className={Styles.empty_search}>
          <div>
            <img src="../assets/no.ico" alt="no music" />
            <p>No search result</p>
          </div>
        </article>
      )
        
      )}
    </section>
  );
};

export default MusicSearch;
