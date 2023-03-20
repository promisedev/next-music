import {useState,useContext, createContext, useEffect, useReducer} from 'react'
import Cookies from "js-cookie"
const Store = createContext()

const AppProvider = ({children})=>{
const [searching,setSearching]= useState(false)
const [ismusic,setIsmusic] = useState(true)
const [error,setError] = useState("")
const [success,setSuccess] = useState("")
const [iserr,setIserr] = useState(false)
const [issuccess,setIssuccess] = useState(false)
const [isdanger,setIsdanger] = useState(false)
const [deleteid,setDeleteid] = useState("")
const [showsearch, setShowsearch]= useState(false)       
const initialstate = Cookies.get('prophegos')? JSON.parse(Cookies.get('prophegos')):{playlist:[],favorites:[]};




const reducer=(state,action)=>{

  const new_date =  new Date().toString();
  const date = new_date.substring(0,10);
  console.log(date);
switch (action.type) {
  case "ADD_FAVORITE":
    {
      console.log("initiating...");

      const isItem = state?.favorites.find(
        (item) => item._id === action.payload._id
      );
      // console.log(isItem);
      

      if (!isItem) {
        console.log("add item");
        console.log(state?.favorites,action.payload);
        Cookies.set(
          "prophegos",
          JSON.stringify({
            ...state,
            favorites: [...state?.favorites, {...action.payload, isliked:true, added:date}],
          })
        );

        return {
          ...state,
          favorites: [
            ...state?.favorites,
            { ...action.payload, isliked: true,added:date },
          ],
        };

      } else {
        console.log("conflict");
        console.log(state?.favorites);
        return state;
      }
    }

    break;
    // ------------------------------------------------
  case "ADD_PLAYLIST":{
    console.log("initiating...");

    const isItem = state?.playlist.find(
      (item) => item._id === action.payload._id
    );
    console.log(isItem);

    if (!isItem) {
      console.log("add item");
      console.log(state?.playlist, action.payload);
      Cookies.set(
        "prophegos",
        JSON.stringify({
          ...state,
          playlist: [...state?.playlist, { ...action.payload, added: date }],
        })
      );

      return {
        ...state,
        playlist: [...state?.playlist, { ...action.payload , added:date}],
      };
    } else {
      console.log("conflict");
      console.log(state?.playlist);
      return state;
    }
  };
break;
// ----------------------------------------------------------
  default:
    return state;
    break;
}
}

const [state, dispatch] = useReducer(reducer, initialstate);


    return (
      <Store.Provider
        value={{
          ismusic,
          setIsmusic,
          ismusic,
          setIsmusic,
          error,
          setError,
          success,
          setSuccess,
          iserr,
          setIserr,
          issuccess,
          setIssuccess,
          isdanger,
          setIsdanger,
          deleteid,
          setDeleteid,
          dispatch,
          state,
          showsearch,
          setShowsearch,
          searching,setSearching
        }}
      >
        {children}
      </Store.Provider>
    );
}

const useGlobalContext =()=>{

    return(useContext(Store))
}

export {AppProvider, useGlobalContext}