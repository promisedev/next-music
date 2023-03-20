import Layout from "../src/components/layout2";
import  Model from "../src/components/favorite"
import Cookies from 'js-cookie'
import { useGlobalContext } from "../src/controller/context_api";
import Seo from '../src/components/seo'

const Favorite = () => {
const{state} = useGlobalContext()
const found_favorite = state.favorites;


  // Cookies.get("prophegos")&& JSON.parse(Cookies.get("prophegos")).favorites ||


  return <Layout>
    <Seo title="Favorite | Prophegos Music" description="" og=""/>

    <Model props={found_favorite}/>
  </Layout>;
};


// export async function getStaticProps() {
//   const response = null; //await axios.get('/api/getallmusic')
//   console.log(response);

//   return {
//     props: { data: {} },
//   };
// }
export default Favorite;
