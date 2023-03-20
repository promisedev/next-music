import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import  Layout from "../src/components/layout"
import Musicbody from '../src/components/musicbody'
import Popular from '../src/components/popular'
// const inter = Inter({ subsets: ['latin'] })
import Recent from  "../src/components/recent"
import axios from 'axios'
  import database from '../src/utils/config'
 import musicSchema from '../src/models/musicSchema'
import Seo from '../src/components/seo'
 const Home=({music}) =>{

  
   
  return (
    <>
     <Seo title="Prophegos Music" description="Soundtrack you life with Prophegos music" og=""/>

      <Layout>
        {/* <Recentplays/> */}
         <Musicbody props={music} />
        <Popular  props={music}/>
        <Recent  props={music}/> 
      </Layout>
      
    </>
  )
}



export  async function getStaticProps() {
await database.connect()
const music = await musicSchema.find().lean();
//await database.disconnect()
return{
  props:{music:music.map(database.convert)}
}

}

 export default  Home
