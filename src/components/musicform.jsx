import { useGlobalContext } from "../controller/context_api"
import { AttachFile } from "@mui/icons-material"
import { useState } from "react"
import Styles from "./admin.module.css"
import { storage } from "../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import axios from "axios";

const MusicForm=()=>{

const [artwork,setArtwork] = useState({})
const [file,setFile] = useState({})
const [title,setTitle] = useState("Music Title")
const [duration,setDuration] = useState("Music Duration")
const [genre,setGenre] = useState("Music Genre")
const [author,setAuthor] = useState("Music Author")
const [type,setType] = useState("")
const {error,setError,success,setSuccess,iserr,setIserr,issuccess,setIssuccess} = useGlobalContext()

const [issubmit,setIssubmit] = useState(false)

const handleFile=(e)=>{
setIserr(false)
 setIssuccess(false) 
 setIssubmit(false)  
 const name = e.currentTarget.name   

 switch (name) {
    case "art_work":setArtwork(e.currentTarget.files[0] )
        
        break;
 case "art_file":{setFile(e.currentTarget.files[0]); setType(e.currentTarget.files[0].name.split(".").pop());}
        
        break;
 case "song_title":setTitle(e.currentTarget.value)
        
        break;  
case "song_duration":setDuration(e.currentTarget.value)
        
        break;
 case "genre":setGenre(e.currentTarget.value)
        
        break;
 case "song_author":setAuthor(e.currentTarget.value)
        
        break;
        
 }

}

 const [isupload,setIsupload]  = useState(false) 

const upLoad = (e)=>{
e.preventDefault()

try {
 if(artwork == {}|| file == {} || title == "" || duration == "" || genre == ""|| author == "") {

    setIserr(true); setError("Please provide all fields")

 }  else if(artwork == {}|| file == {} || title == "Music Title" || duration == "Music Duration" || genre == "Music Genre"|| author == "Music Author") {
setIserr(true); setError("Please provide all fields")
    
 }else{
setIssubmit(true)
//  console.log(artwork, file ,type )
try {
    const artwork_ref = ref(
      storage,
      `prophegos_artwork/${"prophegos_artwork_" + uuid()}`
    );
console.log("...initiating 1");
    uploadBytes(artwork_ref, artwork).then((res) => {
      getDownloadURL(artwork_ref).then((url) => {
        const artwork_url = url;

        console.log("...initiating 2");
        
        const file_ref = ref(
          storage,
          `prophegos_music/${"prophegos_music_" + uuid()}`
        );

        uploadBytes(file_ref, file).then((res) => {
          getDownloadURL(file_ref).then(async(url) => {
            const file_url = url;

console.log("...initiating 3");
            await axios 
              .post("/api/musicupload", {
                artwork_url: artwork_url,
                music_url: file_url,
                title: title,
                duration: duration,
                genre: genre,
                author: author,
                likes: 0,
                plays:0,
                postedAt: new Date().toISOString().substring(0,10),
                type: type,
              })
              .then((res) => {
                console.log(res);
                setSuccess("New music added successfully");
                setIssuccess(true);
                setIssubmit(false);
                setTimeout(() => {                  
                  setIssuccess(false);
                }, 3000);
              })
              .catch((err) => {
                console.log(err);
                setError("Failled to upload music");
                setIserr(true);
                setIssubmit(false);
              });
          });
        }).catch((err) => {
                console.log(err);
                setError("Failled to upload music");
                setIserr(true);
                setIssubmit(false);
              });
      });
    }).catch((err) => {
                console.log(err,"Unsuccessful");
                setError("Failled to upload music");
                setIserr(true);
                setIssubmit(false);
              });
} catch (error) {
    console.log(error,"Unsuccessful");
    setIssubmit(false);
}

 }

} catch (error) {
    console.log(error,"Unsuccessful");
    setError("Failled to upload music");
    setIserr(true);
    setIssubmit(false);
}

}

    return(
        <div className={Styles.music_form}>
	<form onSubmit={upLoad}>
        {/* ------------------------------------------- */}
       <div className={Styles.form_div} >
		<label> Music artwork </label>
        <div className={Styles.attach}>
            <div className={Styles.attach_txt}>{artwork?.name}</div>
            <span> <label htmlFor="art_work"> <AttachFile className={Styles.attach_icon}/>
            <input type="file" name="art_work" id="art_work" className={Styles.attach_file} onChange={handleFile}/></label>
            </span>
            </div>
	</div>
		{/*-------------------------------------------  */}
	<div className={Styles.form_div} >
		<label> Music file </label>
        <div className={Styles.attach}>
            <div className={Styles.attach_txt}>{file?.name}</div>
            <span> <label htmlFor="art_file"> <AttachFile className={Styles.attach_icon}/>
            <input type="file" name="art_file" id="art_file" className={Styles.attach_file} onChange={handleFile}/></label>
            </span>
            </div>
	</div>
{/* ------------------------------------------------- */}
    <div className={Styles.form_div} >
<label htmlFor="song_title"> Song title</label> 
        <input type="text" name="song_title" value={title} placeholder="Enter song title" onChange={handleFile}/>
    </div>
{/* --------------------------------------------- */}
	<div className={Styles.form_div} >	
	<label htmlFor="song_duration"> Song Duration</label>
     <input type="text" name="song_duration" value={duration}  placeholder="Enter song duration" onChange={handleFile}/>
	</div>

{/* -------------------------------------------- */}
    <div className={Styles.form_div} >
	<label htmlFor="genre"> Genre</label> 
    <input type="text" name="genre" value={genre} placeholder="Enter song genre" onChange={handleFile}/>
</div>
{/* ---------------------------------------------- */}
<div className={Styles.form_div} >
<label htmlFor="song_author"> Author name</label> 
<input type="text" name="song_author" value={author} placeholder="Enter author name"  onChange={handleFile}/>
 </div>
 {/* -------------------------------- */}
<div className={Styles.form_button} >
 <button  type="submit" name="upload"  disabled={issubmit} onClick={upLoad}>{issubmit?"UPLOADING...":"UPLOAD"}</button>
 </div>
	</form>
</div>
    )
}

export default MusicForm