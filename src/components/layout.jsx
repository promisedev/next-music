import Header from "./header"
import Controls from "./controls"
import Footer from './footer'
const Layout = ({children})=>{

    return(
        <>
        <Header/>
{children}

<Footer/>
<Controls/>
	 {/* ----------------------------------------- */}
</>
    )


}
export default Layout