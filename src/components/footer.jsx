import Styles from "./footer.module.css"
import Link from "next/link"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer =()=>{
const date = new Date().getFullYear()

const links = [{"id":"1","name":"About","link":"/about"},{"id":"2","name":"Home","link":"/"},{"id":"3","name":"Promotion","link":"/promotion"},{"id":"4","name":"Privacy policy","link":"/privacy"},{"id":"5","name":"Cookies","link":"/cookies"}]

const social = [{"link":"https://twitter.com/"},{"link":"https://facebook.com/"} ,{"link":"https://youtube.com/"},{"link":"https://instagram.com/"}]

    return(
<footer className={Styles.footer_body}>
<div className={Styles.footer_logo}><img className={Styles.footer_img} src="../assets/logo.png" /></div>
{/* ------------------------------------------ */}
<copyright className={Styles.footer_copy}>
    &copy; {date} Prophegos, all rights reserved.
</copyright>
{/* ----------------------------------------- */}
<div className={Styles.footer_link_cont}>
 <div className={Styles.footer_link}>
    {
links.map((link,index)=>{

    return(
        <Link href={link.link} key={index} className={Styles.f_link}>{link.name}</Link>
    )
})
    }
    </div>   
</div>
{/* -------------------------------------- */}
<div className={Styles.social_link_cont}>
    <div className={Styles.social_link}>
{social.map((social,index)=>{

return(<a href={social.link} className={Styles.s_link} key={index} >{index ==0 &&<TwitterIcon/> ||index ==1 &&<FacebookOutlinedIcon/> ||index ==2 &&<YouTubeIcon/>||index ==3 &&<InstagramIcon/>}</a>)

})}
</div> 
</div>


</footer>
    )
}

export default Footer