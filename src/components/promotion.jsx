import Styles from './promotion.module.css'
import Header from './headers'
import { ArrowBackIos, ArrowForward } from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Promotion=()=>{

const sendEnquiry =(e)=>{
e.preventDefault();
}
const showForm=(e)=>{
e.currentTarget.classList.toggle(`${Styles.show_arrow}`);
const ele1 = e.currentTarget.parentElement.parentElement.children[1];
const ele2 = e.currentTarget.parentElement.parentElement.children[2];
ele1.classList.toggle(`${Styles.show_form1}`);
ele2.classList.toggle(`${Styles.show_form2}`);
//console.log(ele1,ele2)
}

const proto = [{id:"1",title:"Music promotion",desc:"Get heard by millions of listeners when you signup for our music promotion",image:"../assets/promo2.png"},{id:"2",title:"Brand promotion",desc:"Reach out to your customers where they listen, make good use of our platform when you promote your brand with us",image:"../assets/promo1.png"},{id:"3",title:"Craft promotion",desc:"Show-case your craft",image:"../assets/promo3.png"}];

    return( 
<section className={Styles.promotion}>
    <Header/>
    {/* -----------desktop------------------- */}
<article className={Styles.promotion_hero} style={{backgroundImage:`url("../assets/promotion_bg.png")`,backgroundRepeat:"no-repeat",backgroundSize:"100% auto"}}>

<div className={Styles.promotion_text}>
    Advertise your brand so you can be seen easily
</div>
<p className={Styles.promotion_desc}>We help promote your brand on our platform as millions of listeners listen. You can promote your Song, business or craft.</p>
{/* ------------------------------- */}
<form className={Styles.promotion_form} onSubmit={sendEnquiry}>
<div className={Styles.form_div} style={{zIndex:"10"}}><input type="text" name="email" placeholder="Email"/>
<div className={Styles.arrow} onClick={showForm}>
    <ArrowRightAltIcon className={Styles.arrow_icon}/>
</div>
</div> 
{/* --------------------------------- */}
<div className={Styles.form1}><input type="text" name="purpose" placeholder="Purpose of Enquiry(...Advertising)"/></div>
{/* -------------------------------------------- */}
<button type="submit" onClick={sendEnquiry} className={Styles.form2}> Enquire</button>
</form>

</article>
{/* --------------------mobile------------------------ */}

<article className={Styles.promotion_hero1} >

<div className={Styles.promotion_text}>
    Advertise your brand so you can be seen easily
</div>
<p className={Styles.promotion_desc}>We help promote your brand on our platform as millions of listeners listen. You can promote your Song, business or craft.</p>
{/* ------------------------------- */}
<form className={Styles.promotion_form} onSubmit={sendEnquiry}>
<div className={Styles.form_div} style={{zIndex:"10"}}><input type="text" name="email" placeholder="Email"/>
<div className={Styles.arrow} onClick={showForm}>
    <ArrowRightAltIcon className={Styles.arrow_icon}/>
</div>
</div>
{/* --------------------------------- */}
<div className={Styles.form1}><input type="text" name="purpose" placeholder="Purpose of Enquiry(...Advertising)"/></div>
{/* -------------------------------------------- */}
<button type="submit" onClick={sendEnquiry} className={Styles.form2}> Enquire</button>
</form>

</article>

{/* ----------------------------------------------- */}

<article className={Styles.ads_temp}>
   <article className={Styles.ads_temp_cont}> 
{proto.map((proto,index)=>{
return(
    <article className={Styles.proto_body} key={index}>
      <div style={{backgroundImage:`url(${proto.image})`,backgroundRepeat:"no-repeat",backgroundSize:"105% 100%"}}></div>
       <p>{proto.title}</p>
       <h3>{proto.desc}</h3> 

    </article>
)
})}
</article>
</article>
</section>
    )
}

export default Promotion