import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./Pages/About.js";
import Body from "./components/Body.js";
import Error from "./Pages/Error.js";
import RestroMenu from "./components/RestroMenu.js";
import Cart from "./Pages/Cart.js";
import SignUp from "./Pages/SignUp.js";
import Login from "./Pages/Login.js";
import PrivateRoute from "./PrivateRoute.js";
import { Provider } from "react-redux";
import Store from "./store/Store";
import Payment from "./components/Payment.js";
import Contact from "./Pages/Contact.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        // element:<PrivateRoute Component={Cart}/>
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        // element:<PrivateRoute Component={RestroMenu}/>
        element: <RestroMenu />,
      },
      {
        path: "/payment",
        element: <PrivateRoute Component={Payment} />,

        // element: <Payment />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
