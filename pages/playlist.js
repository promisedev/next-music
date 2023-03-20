import Layout from "../src/components/layout2";
import Model from "../src/components/playlist";
import { useGlobalContext } from "../src/controller/context_api";
import Cookies from "js-cookie";
import Seo from'../src/components/seo'

const Playlist = () => {
  const{state} = useGlobalContext()
  const found_playlist =  state.playlist;


    // (Cookies.get("prophegos") &&
    //   JSON.parse(Cookies.get("prophegos")).playlist) ||


  return (
    <Layout>

      <Seo title="Playlist | Prophegos Music" description="" og=""/>
      <Model props={found_playlist} />
    </Layout>
  );
};

// export async function getStaticProps() {

//   return {
//     props: { data: {} },
//   };
// }

export default Playlist;
