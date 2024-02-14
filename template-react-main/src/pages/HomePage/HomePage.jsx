import { useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { $Current_Width } from "../../store";
import { useRecoilState } from "recoil";
function HomePage() {
  const [Current_Width] = useRecoilState($Current_Width);
  useEffect(() => {
    console.log(Current_Width);
    // Active WoW.js
    const wow = new WOW({ live: false });
    wow.init();
    // Active Swal[=]
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    // axios
    //   .get("https://official-joke-api.appspot.com/random_joke")
    //   .then((res) => {
    //     console.log(res.data.setup);
    //   });
  }, []);
  return (
    <div className="col-12" id="HomePage">
      <FontAwesomeIcon icon={faHouse} />
      <h1 className="col-12" style={{ height: "100vh" }}>
        Home Page
      </h1>
      <p className="col-12 p-5 alert alert-danger wow animate__animated animate__backInRight">
        this p is for test wow js
      </p>
    </div>
  );
}
export default HomePage;
