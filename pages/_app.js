import '../styles/globals.css';
import "../styles/main-control.css";
import {AppProvider} from "../src/controller/context_api";
import { useRouter } from 'next/router';
import  {SessionProvider,useSession} from 'next-auth/react';

export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
       { Component.auth? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
        ):(
        <Component {...pageProps} />)}
      </AppProvider>
    </SessionProvider>
  );
}

const Auth = ({children})=>{
 const router = useRouter(); 
const {status}=useSession({
  required:true,
  onUnauthenticated() {
    router.push("/prophegos/auth?redirect=/prophegos/content-management")
  }
});

if(status === "loading"){

}

return children


}

