import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectPage = ({ children }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectPage;
