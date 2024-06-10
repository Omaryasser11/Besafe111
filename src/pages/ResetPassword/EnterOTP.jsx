import React, { useRef, useState } from "react";
import "./EnterOTP.scss";
import baseUrl from "../../BaseUrl";
import { useLocation, useNavigate } from "react-router-dom";

export default function EnterOTP() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const [otp, setOtp] = useState([]);

  const query = useQuery();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await baseUrl.post("/account/verifyEmail", {
        email: query.get("email"),
        otp: otp.join(""),
      });

      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="BIg col-12">
      <h1>Enter Verfiction Code</h1>
      <p>OTP sent on ....12@gmail.com</p>

      <div class="otp-field">
        <input
          type="text"
          maxLength="1"
          ref={input1}
          onChange={(e) => {
            setOtp([...otp, e.target.value]);
            input2.current.focus();
          }}
        />
        <input
          type="text"
          maxLength="1"
          ref={input2}
          onChange={(e) => {
            setOtp([...otp, e.target.value]);
            input3.current.focus();
          }}
        />
        <input
          type="text"
          maxLength="1"
          ref={input3}
          onChange={(e) => {
            setOtp([...otp, e.target.value]);
            input4.current.focus();
          }}
        />
        <input
          type="text"
          maxLength="1"
          ref={input4}
          onChange={(e) => setOtp([...otp, e.target.value])}
        />
      </div>
      <button className="btn" onClick={handleClick}>
        Enter{" "}
      </button>
    </div>
  );
}
