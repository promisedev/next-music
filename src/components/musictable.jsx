import { useGlobalContext } from "../controller/context_api";
import Styles from "./admin.module.css";
import {useEffect, useState} from  'react'

const Table = ({props}) => {
const {setIsdanger, setDeleteid} = useGlobalContext()

 const Delete =(e,id) =>{
setIsdanger(true) ;
setDeleteid(id)
 }


const [playlists,setPlaylists]=useState(props)
useEffect(()=>{setPlaylists(props)},[props])

  return (
    <div className={Styles.music_table_cont}>
    <table className={Styles.music_table}>
      
      <thead>
        <tr>
          <th>Id </th>
          <th className={Styles.table_th_title}>Art Work </th>
          
          <th>Type</th>
          <th>Likes</th>
          <th className={Styles.table_th_action}>Action</th>
        </tr>
      </thead> 
      <tbody>
        {playlists?.map((obj)=>{
          return {...obj, postedAt: new Date(obj.postedAt)}
        }).sort((a,b)=>Number(b.postedAt)-Number(a.postedAt)).map((play, index) => {
          const id =play?._id;

                   return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className={Styles.table_td_title}>
                <article
                  className={Styles.table_art_cont}                  
                >
                  
                  <div className={Styles.table_art} style={{
                    backgroundImage:`url(${play?.artwork_url})`
                  ,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}></div>
                  <div className={Styles.table_art_desc}>
                    <h2>{play?.title}</h2>
                    <p>{play?.author}</p>
                  </div>
                </article>
              </td>
              
              <td>{play?.type}</td>
              <td>{play?.likes}</td>
              <td className={Styles.table_tr_button} ><button onClick={(e)=>Delete(e,id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};





export default Table;
