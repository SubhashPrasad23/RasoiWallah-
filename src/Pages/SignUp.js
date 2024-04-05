import React, { useState } from "react";
import login from "../asset/login.jpg";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      data.fullName == "" ||
      data.email == "" ||
      data.password == "" ||
      data.confirmPassword == ""
    ) {
      alert("Please fill all the fields");
    } else if (data.password !== data.confirmPassword) {
      alert("Password and confirm password should be same");
      setData({fullName:"",email:"",password:"",confirmPassword:""})

    } else{
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/login");
      setData({fullName:"",email:"",password:"",confirmPassword:""})
    }
  };

  return (
    <div className="bg-gray-100 w-full h-screen flex px-24 py-10 ">
      <div className="w-1/2 shadow-2xl h-full bg-white rounded-tl-3xl rounded-bl-3xl flex justify-center items-center">
        <div className=" w-4/5 h-4/5  flex flex-col mx-24 px-10  ">
          <h3 className="text-3xl font-semibold text-gray-600 my-10">
            Sign up
          </h3>

          <form onSubmit={submitHandler} className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              value={data.fullName}
              name="fullName"
              onChange={inputHandler}
              className="py-2 border border-orange-400 p-2 placeholder-gray-500 focus:outline-none focus:border-blue-500 "
            />
            <input
              type="text"
              placeholder="Email Id"
              value={data.email}
              name="email"
              onChange={inputHandler}
              className="p-2 my-4 border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Password"
              value={data.password}
              name="password"
              onChange={inputHandler}
              className="p-2  border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              name="confirmPassword"
              onChange={inputHandler}
              className="p-2 border my-4 border-orange-400 placeholder-gray-500  focus:outline-none focus:border-blue-500"
            />
            <button
              type="subbmit"
              className="bg-orange-400 py-2 mt-6 w-full text-white text-lg hover:bg-blue-400"
            >
              Sign up
            </button>
          </form>

          <NavLink to="/login">
            <p className="py-1 text-gray-600">
              Already have an account?{" "}
              <span className="text-blue-600 font-bold">Log In</span>
            </p>
          </NavLink>
        </div>
      </div>
      <div className="w-1/2 h-full shadow-2xl rounded-tr-3xl rounded-br-3xl relative">
        <img
          src={login}
          alt=""
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

export default SignUp;
