// import  "./search.css"
import {useEffect,useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalContext } from "../controller/context_api";
import {useRouter} from 'next/router';

const Search=(props)=>{
const router = useRouter()
  // console.log(props)
const {showsearch, setShowsearch}= useGlobalContext();

useEffect(()=>{
window.addEventListener("scroll",()=>{
    console.log("scrolled")
    setShowsearch(false)
})

},[])

const [query,setQuery]= useState('');

const submitSearch= async(e)=>{
e.preventDefault();

router.push(`/music/searches?q=${query}`)
 
}

return ( 
  <div
className={showsearch?"search_div1 show_search1":"search_div1 hide_search1"} >

    <form onSubmit={submitSearch} style={{backgroundColor:`${props?.props}`}}>
      <input
        type="text"
        name="search"
        placeholder="what music are you looking for...?"
        onChange={(e)=>setQuery(e.target.value)}
      />
      <button type="submit" onClick={submitSearch}>
        <SearchIcon />
      </button>
    </form>
  </div>
);

}

export default Search


