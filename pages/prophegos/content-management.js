import {useState} from 'react'
import Layout from "../../src/components/layout2"
import Header from "../../src/components/admin_header"
import MusicTable from "../../src/components/musictable"
import MusicForm from "../../src/components/musicform"
import Styles from "../../styles/cms.module.css"
import { useGlobalContext } from "../../src/controller/context_api"
import database from '../../src/utils/config'
import musicSchema from '../../src/models/musicSchema'
import axios from "axios"

const Admin=({data})=>{

const [datas,setDatas]=useState(data);
const [isdelete,setIsdelete]=useState(false)
const {ismusic,setIsmusic} = useGlobalContext();
const {
  error,
  setError,
  success,
  setSuccess,
  iserr,
  setIserr,
  issuccess,
  setIssuccess,
  isdanger,setIsdanger,deleteid
} = useGlobalContext();

const activateMusic=(e)=>{
	e.preventDefault()
setIsmusic(true)
}

const activateForm=(e)=>{
	e.preventDefault()
setIsmusic(false)
}

const Delete= async()=>{
	setIsdanger(false)
	setIsdelete(true)
await axios.post("/api/deletesinglemusic",{
  id:deleteid
}).then((res)=>{
  const result = res.data.result.map(database.convert);
setDatas(result)
setIsdelete(false)
}).catch((err)=>{
  console.log(err)
 setIsdelete(false) 
})

}
const Cancle=()=>{
	setIsdanger(false)
}

    return (
      <Layout>
        
        {/* ----------------------------------------- */}
        {isdanger && (
          <article className={Styles.music_table_modal}>
            <div className={Styles.modal_item}>
              <p className={Styles.modal_item_p1}>
                {" "}
                Are you sure you want to delete this item?
              </p>
              <p className={Styles.modal_item_p2}>
                <button className={Styles.modal_item_primary} onClick={Cancle}>
                  Cancel
                </button>
                <button className={Styles.modal_item_danger} onClick={Delete}>
                  Delete
                </button>
              </p>
            </div>
          </article>
        )}
        {/* ------------------------------------------------------------ */}
        {isdelete && (
          <article className={Styles.music_table_modal}>
            <div>Deleting...</div>
          </article>
        )}
        {/* ------------------------------------------------------------------- */}
        <Header />
        {/* ------------------------------------------ */}
        <div className={Styles.body}>
          {/* <!-- ----------------------------------11--- --> */}
          {iserr && (
            <article className={Styles.error}>
              <div className={Styles.err_alert}> {error}</div>
            </article>
          )}
          {issuccess && (
            <article className={Styles.error}>
              <div className={Styles.success_alert}> {success}</div>
            </article>
          )}
          {/* ---------------------------------------11------------------- */}

          <div className={Styles.music_div}>
            <button
              className={`${ismusic ? Styles.active_btn : Styles.btn}`}
              onClick={activateMusic}
            >
              My Music
            </button>
            <button
              className={`${ismusic ? Styles.btn : Styles.active_btn}`}
              onClick={activateForm}
            >
              Upload Music 
            </button>
          </div>
          {/* --------------------------------------------------------- */}

          {ismusic ? <MusicTable props={datas} /> : <MusicForm />}

          {/* <!-- //////////////////////////////////////// --> */}
        </div>
      </Layout>
    );
}
 Admin.auth=true;

export async function getServerSideProps(){
await database.connect();
const data =  await musicSchema.find().lean()
await database.disconnect();

  return {
    props:{data:data.map(database.convert)}
  }
}

export default Admin