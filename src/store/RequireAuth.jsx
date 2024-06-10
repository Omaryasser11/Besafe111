import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return <div>{children}</div>;
};

export default RequireAuth;
