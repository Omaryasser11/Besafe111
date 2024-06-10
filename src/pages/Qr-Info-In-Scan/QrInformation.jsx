import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHandsHoldingChild,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import "./QrInformation.scss";
import face from "../../assets/face22.png";
export default function QrInformation({ data }) {
  return (
    <section className="col-6 QrINfo">
      <div className="col-12 Abbove">
        <div className="col-5 ImgContainer">
          <img src={face} />
        </div>
        <div className="col-5 UserInfo">
          <h1>{data?.name}</h1>
          <div className="Adress Fonto">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <span>{data?.address}</span>
          </div>
          <div className="location Fonto">
            <FontAwesomeIcon className="icon" icon={faMapLocation} />
            <a href="https://maps.app.goo.gl/dtGzSMQWPkFwR1TP6">
              Location on Map
            </a>
          </div>
          <div className="contact Fonto ">
            <FontAwesomeIcon className="icon" icon={faHandsHoldingChild} />
            <span>{data?.phoneNumber}</span>
          </div>
        </div>
      </div>
      <div className="col-10 bootom">
        <ul>
          <li>This person may be mentally ill or have special needs.</li>
          <li>
            If he is found, please contact his caregiver by phone or deliver him
            to this address.
          </li>
          <li>
            Please do not leave this person until you are sure that he is in a
            safe place.
          </li>
          <li>
            Please contact the number responsible for him to help him reach him.
          </li>
        </ul>

        <p> </p>
        <p>
          Thank you for your humanitarian service to help this person reach his
          home{" "}
        </p>
      </div>
    </section>
  );
}
