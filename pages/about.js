import Styles from "../styles/about.module.css"
import Layout from "../src/components/layout2"
import Header from "../src/components/headers"
import Link from "next/link"
import Seo from '../src/components/seo'
const About=()=>{
 
    return(
        <Layout>
            <Seo title="About | Prophegos Music" description="With Prophegos, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more." og=""/>
            <Header/>
            <article className={Styles.about_cont}>
<div className={Styles.about_body}>
    <h2>About Us</h2>
<p>With Prophegos, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more.</p>

<p>There are millions of tracks on Prophegos. So whether you’re behind the wheel, working out, partying or relaxing, the right music  is always at your fingertips. Choose what you want to listen to.</p>

<p>You can also browse through the collections of music, artists, and celebrities.</p>

<p>Soundtrack your life with Prophegos. Subscribe or listen for free.</p>

<h2>Quick links</h2>

<ul>
<li> <Link href="/advertise">Promotion</Link>- Promote your product brand or music with us, sit back and watch it get the attension it needs.</li>
{/* <li> <Link href="/support">Support</Link>- Check out our help site for answers to your questions and to learn how to get the most out of Prophegos and your music</li> */}

</ul>
</div>

            </article >
        </Layout>
    )
}


// export async function getStaticProps() {
//   const response = null; 
//   console.log(response);

//   return {
//     props: { data: {} },
//   };
// }

export default About