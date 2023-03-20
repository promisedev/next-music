import { useState } from "react";
import database from "../../src/utils/config";
import musicSchema from "../../src/models/musicSchema";
import Layout from "../../src/components/layout2";
import Mymusic from "../../src/components/mymusic";
import Styles from "../../styles/music.module.css";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import Seo from '../../src/components/seo'
const Music = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const submitSearch = async (e) => {
    e.preventDefault();

    router.push(`/music/searches?q=${query}`);
  };
  return (
    <Layout>
      <Seo
        title={data.title}
        description="Soundtrack you life with Prophegos music"
        og={data.music_art}
      />
      <section className={Styles.music_body}>
        <header className={Styles.music_nav}>
          <div className={Styles.music_logo}>
            <img
              src="../assets/logo.png"
              alt="logo"
              className={Styles.music_img}
            />
          </div>

          <div className="m_search_div1">
            <form onSubmit={submitSearch}>
              <input
                type="text"
                name="search"
                placeholder="what music are you looking for...?"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" onClick={submitSearch}>
                <SearchIcon />
              </button>
            </form>
          </div>
        </header>
        <Mymusic props={data} />
        {/* ----------------------------------- */}
      </section>
    </Layout>
  );
};

export default Music;

export async function getStaticPaths(){
await database.connect();
  const result = await musicSchema.find().lean()
  const ids = result.map(database.convert)
//await database.disconnect();
  return{
    fallback:false,
    paths:ids.map((id)=>({params:{musicid:id._id.toString()}}))
  }
}



export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const id = params.musicid;
  await database.connect();
  const result = await musicSchema.findOne({ _id:id }).lean();
//await database.disconnect();
  return {
    props: {
      data: {
        ...result,
        _id: result._id.toString(),
        createdAt: result.createdAt.toString(),
        updatedAt: result.updatedAt.toString(),
      },
    },revalidate:1
  };
}
