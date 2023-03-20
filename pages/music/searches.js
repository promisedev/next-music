
import Layout from "../../src/components/layout2";
import Searches from "../../src/components/musicsearch";
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react'
// import database from '@/utils/config'
// import musicSchema from '@/models/musicSchema'
import axios from 'axios'
import { async } from "@firebase/util";
import { useGlobalContext } from "../../src/controller/context_api";
import Seo from '../../src/components/seo'
const Music = () => {

 const [search,setSearch] = useState([]);
 const {searching, setSearching} = useGlobalContext()

  const router = useRouter();
const {q}= router.query;

useEffect(()=>{

 const request = async()=>{
  setSearching(true)
  console.log("requesting...",q)
   await axios.post("/api/musicsearch",{
  query:q
 }).then((res)=>{
  setSearching(false)
setSearch(res.data)
 }).catch((err)=>{
setSearching(false)
console.log(err)
 }) 

  
 } 

 request();

},[q])

  return (
    <Layout>
      <Seo
        title="Search"
        description="Look for your favorite music in one search"
        og=""
      />
      {/* {issearch&&(<div className="init_loading">
      
    </div>)} */}
      <Searches props={search} />
    </Layout>
  );
};





export default Music;
