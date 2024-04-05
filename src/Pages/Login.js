import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../asset/login.jpg";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/AuthSlice";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    // console.log(userData.email);

    if (data.email == "" || data.password == "") {
      alert("Please fill all the fields");
    } else {
      if (data.email === userData.email && data.password == userData.password) {
        navigate("/");
        // localStorage.setItem("isLoggedIn", true);
        dispatch(login());
      } else {
        alert("Invalid credentials");
        setData({ email: "", password: "" });
      }
    }
  };

  return (
    <div className="bg-gray-100 w-full h-screen flex px-24 py-10 ">
      <div className="w-1/2 shadow-2xl shadow-black h-full bg-white rounded-tl-3xl rounded-bl-3xl flex justify-center items-center">
        <div className=" w-4/5 h-4/5  flex flex-col mx-24 px-10  ">
          <h3 className="text-3xl font-semibold text-gray-600 my-10">Log In</h3>
          <form onSubmit={submitHandler} className="flex flex-col">
            <input
              type="text"
              placeholder="Email Id"
              value={data.email}
              onChange={inputHandler}
              name="email"
              className="p-2 my-4 border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Password"
              value={data.password}
              onChange={inputHandler}
              name="password"
              className="p-2  border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <div className="flex justify-between my-2 text-gray-500">
              <div className="flex items-center space-x-1">
                {" "}
                <input
                  type="checkbox"
                  name="IsrememberMe"
                  id="rememberMe"
                  className="h-4 w-4"
                />
                <label htmlFor="rememberMe">Rememmber me</label>
              </div>
              <p>Forgot Password?</p>
            </div>

            <button
              type="submit"
              className="bg-orange-400 py-2 mt-6 w-full text-white text-lg hover:bg-blue-400 font-semibold"
            >
              Log In
            </button>
          </form>

          <NavLink to="/signup">
            <p className="py-1">
              Don't have an account?{" "}
              <span className="text-blue-600 font-bold">Sign up</span>
            </p>
          </NavLink>
        </div>
      </div>
      <div className="w-1/2 h-full shadow-2xl shadow-black rounded-tr-3xl rounded-br-3xl relative">
        <img
          src={loginImg}
          alt="loginImg"
          className="w-full h-full rounded-tr-3xl rounded-br-3xl "
        />
        <div className="absolute top-52 left-16 w-4/5 mx-auto">
          <p className=" text-3xl text-orange-500 font-bold">
            Delight in every bite, delivered with delight.
            <span className="text-white inline-block my-10">
              Order now and savor the moment !
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
