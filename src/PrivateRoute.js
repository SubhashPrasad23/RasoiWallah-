import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ Component }) {
  // console.log(Component)
  const navigate = useNavigate();

  const isAuth = useSelector((store) => store.user.isLoggedIn);
  // const login=localStorage.getItem("isLoggedIn")
  // console.log(isAuth);
  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}

export default PrivateRoute;
