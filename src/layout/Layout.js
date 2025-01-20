import React from 'react'
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header";
import Store from "../store/Store";
import Footer from "../components/Footer";

const Layout = () => {
   return (
     <Provider store={Store}>
        
       <Header />
       <Outlet />
       <Footer />
     </Provider>
   );
}

export default Layout