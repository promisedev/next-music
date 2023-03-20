import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useGlobalContext } from "../controller/context_api";


const Controls = () => {
const history = useRouter()
const {showsearch, setShowsearch}= useGlobalContext();

    const icons = [{"id":1,"name":"Home"},{"id":2,"name":"Playlist"},{"id":3,"name":"Favorite"},{"id":4,"name":"Search"} ]

const Search = ()=>{
setShowsearch(true);
}

const navigate=(e)=>{
  const id = e.currentTarget.dataset.id;
  console.log(id)
  switch (id) {
    case "Home": history.push("/")
      break;
case "Playlist":history.push("/playlist")
      break;
    case "Favorite":history.push("/favorite")
      break;
   case "Search":Search()
      break;   
  }
}

  return <section className="main-controls-cont">
  <article className="main-controls">

 {icons.map((icon,index)=>{
    return (
      <div
        className="m-icon-div"
        key={index}
        onClick={navigate}
        data-id={icon.name}
      > 
        <IconButton className="m-icon-div-btn">
          {(index == 0 && <HomeIcon />) ||
            (index == 1 && <QueueMusicIcon/>) ||
            (index == 2 && <FavoriteIcon />) ||
            (index == 3 && <SearchIcon />)}
        </IconButton>
        {icon.name}
      </div>
    );
 })}   

    </article>
  </section>;

};

export default Controls;
