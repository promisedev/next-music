import Styles from './searchload.module.css'
import { useState } from 'react'
const Loading =()=>{
    const data =[1,2,3,4,5]
 const[trigger,setTrigger]  = useState(false);

const changeBg =()=>{
setInterval(() => {    
setTrigger(!trigger)
clearInterval()
}, 1000);

}
changeBg()

    return(<article className={Styles.music_container}>
{data.map((item,index)=>{

    return (
      <div className={Styles.music_item} key={index}>
        <div
          className={Styles.music_art}
          style={{
            backgroundColor: `${
              trigger ? "rgb(84, 83, 85)" : "rgb(60, 59, 61)"
            }`,transition:"0.3s ease-in-out"
          }}
        ></div>
        <div
          className={Styles.music_title}
          style={{ 
            backgroundColor: `${
              trigger ? "rgb(84, 83, 85)" : "rgb(60, 59, 61)"
            }`,transition:"0.3s ease-in-out"
          }}
        ></div>
        <div
          className={Styles.music_author}
          style={{
            backgroundColor: `${
              trigger ? "rgb(84, 83, 85)" : "rgb(60, 59, 61)"
            }`,transition:"0.3s ease-in-out"
          }}
        ></div>
      </div>
    );
})}
        
        </article>)
}

export default Loading