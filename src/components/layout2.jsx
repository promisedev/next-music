import Header from "./header";
import Controls from "./controls";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      
      <Footer />
      <Controls />
      {/* ----------------------------------------- */}
    </>
  );
};
export default Layout;
