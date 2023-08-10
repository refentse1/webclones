import Copyrights from "./Copyrights";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
            <Copyrights/>
        </>
     );
}
 
export default Layout;