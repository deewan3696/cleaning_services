

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"


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