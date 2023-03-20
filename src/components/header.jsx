
import {Search} from "@mui/icons-material";
import  Searches from './search'
import Recentplays from './recentplays'
const Header=()=>{
  
 return (
   <main className="head-bg">
     <Searches props={"rgb(17, 16, 23)"} />
     {/* ------------------------- */}
     <div className="head-div">
       <div className="logo">
         {" "}
         <img className="l-img" src="../assets/logo.png" alt='logo'/>
       </div>
       {/* ----------------------- */}
     </div>
     {/* ------------------------------------ */}
     <div className="head_text_cont"> 
       <div className="head_txt">
         Find the right Music that suits your mood.
       </div>
     </div>
{/* ------------------------------------------------------------ */}
     <div className="head-music">
       <Recentplays />
     </div>
   </main>
 );   

}

export default Header