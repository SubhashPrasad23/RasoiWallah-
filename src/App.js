import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import Store from "./store/Store"
import Footer from "./components/Footer";
import "./App.css"
function App() {
  return(
    <Provider store={Store}>
    <div className="">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </Provider>
  )
}

export default App;
