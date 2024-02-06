

import Header from "./Header"
import Footer from "./footer"




const Dashboard = ({children}) =>{

    return (
         <div>
            <Header/>
            {children}
            <Footer/>
         </div>
    )
}












export default Dashboard