
import Styles from "./headers.module.css"
import { ArrowBackIos,  Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
// import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import Searches from './search'
import WebhookIcon from "@mui/icons-material/Webhook";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DiamondIcon from "@mui/icons-material/Diamond";

const Header =()=>{
const link = [ {"id":"1", "link":"/promotion", "name":"Promotion"},{"id":"2", "link":"/about", "name":"About"} ];

const history = useRouter()
const Back =()=>{
    history.push("/")  
}

const showMenu =(e)=>{
   e.currentTarget.classList.toggle(`${Styles.rotate_nav}`);
   e.currentTarget.parentElement.children[1].classList.toggle(`${Styles.show_nav_menu}`);
}


    return (
      <article className={Styles.header_nav}>
        <Searches props={"rgb(10, 19, 29)"} />
        {/* --------------------------------------- */}
        <div className={Styles.nav1}>
          <IconButton className={Styles.header_button} onClick={Back}>
            <ArrowBackIos className={Styles.header_arrow} />
          </IconButton>
          {/* --------------------------------------------------------- */}
          <Link href="/" className={Styles.header_link}>
            {" "} 
            <img
              src="../../../assets/logo.png"
              alt="logo"
              className={Styles.header_logo}
            />
          </Link>


        </div>
        {/* ---------------------------- */}
        <div className={Styles.nav2}>
          {link.map((link, index) => {
            return (
              <Link href={link.link} key={index} className={Styles.nav_link}>
                {link.name}
              </Link>
            );
          })}
        </div>
        
        <div className={Styles.nav_menu_body}>
          <IconButton className={Styles.nav_menu} onClick={showMenu}>
            <ArrowRightAltIcon className={Styles.nav_menu_icon}/>
            
            </IconButton>
            <nav className={Styles.nav_menu_cont} >
              <ul>
                {link.map((link,index)=>{
                  return (
                    <li key={index} onClick={showMenu}><Link href={link.link}>{index==0 && <WebhookIcon className={Styles.nav_icon}/>||index==1 && <DiamondIcon className={Styles.nav_icon}/>}{link.name}</Link></li>
                  )
                })}
              </ul>
            </nav>
          </div>
        
      </article>
    );
}
export default Header




