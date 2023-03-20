
import Styles from '../../styles/cms.module.css'
import Layout from '../../src/components/layout2';
import { useEffect, useState,  } from 'react';
import { SettingsRemoteRounded } from '@mui/icons-material';
import {signIn,useSession} from 'next-auth/react';
import {useRouter} from 'next/router'



const Auth=()=>{

const router = useRouter()
const {redirect} = router.query
const {data:session} = useSession()

useEffect(()=>{
if(session?.user){
    router.push(redirect || "/prophegos/content-management")
}
},[session,redirect,router])



const [email,setEmail]= useState('Admin email');
const [password,setPassword] = useState('Password');
const [passworderr,setPassworderr] = useState('');
const [emailerr,setEmailerr] = useState('');
const [iserr,setIserr] = useState(false);
const [islogin,setIslogin] = useState(false);


const handleInput=(e)=>{
    setIserr(false);
    setIslogin(false);
const value = e.target.name;
switch (value) {
    case "email": setEmail(e.target.value)
    break;
case "password": setPassword(e.target.value)
    break;
    
}
}

const handleLogin = async(e)=>{
    e.preventDefault()
    if (email == "Admin email" || email == "") {
      setIserr(true);
      setEmailerr("please enter a valid email");
      setPassworderr("");
      return;
    } else if (password == "Password" || password == "") {
      setIserr(true);
      setEmailerr("");
      setPassworderr("please enter a valid password");
      return;
    } 

 setIslogin(true)   
console.log("...logging in")
    try {

    await signIn('credentials',{
        redirects: false,
        email:email,
        password:password

    }).then((res)=>{
        setIslogin(false);
        console.log(res)
    }).catch((err)=>{
    setIslogin(false);   
console.log(err)
    })   
        
    } catch (error) {
      setIserr(true);
      setEmailerr("");
      setPassworderr("");  
    }

}


    return (
      <Layout>
        <div className={Styles.auth_body}>
          <article className={Styles.auth_form}>
            <div className={Styles.auth_logo}>
              <img src="../assets/logo.png" alt="logo" />
            </div>
            {/* ---------------------------------------- */}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInput}
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInput}
              />
              <button type="submit" onClick={handleLogin} disabled={islogin}>
                {islogin?"Logging in...":"Login"}
              </button>
            </form>
            {/* ------error------------- */}
            {iserr&&<div className={Styles.auth_error}>
              <p>{passworderr}</p>
              <p>{emailerr}</p>
            </div>}
          </article>
        </div>
      </Layout>
    );

}


export default Auth;
