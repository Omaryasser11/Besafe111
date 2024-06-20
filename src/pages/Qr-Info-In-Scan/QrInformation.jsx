import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHandsHoldingChild,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./QrInformation.scss";
import face from "../../assets/face22.png";
export default function QrInformation({ data }) {
  return (
    <section className="col-6 QrINfo">
      <div className="col-12 Abbove">
        <div className="col-5 flexC">
          <div className="col-5 ImgContainer">
            <img src={data?.imageUrl || face} />

          </div>
          <h1>{data?.name}</h1>
          <span>Patient </span>
        </div>
        <div className="col-7 flexR">
          <div className="card1 ">
            <span className="titlee">Location</span>
            <div className="flexR col-12">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              <span>{data?.address}</span>
            </div>
          </div>
          <div className="card1 ">
            <span className="titlee">Phone</span>
            <div className="flexR col-12">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <span>{data?.phoneNumber}</span>
            </div>
          </div>
          <div className="card1 ">
            <span className="titlee">Related Phone</span>
            <div className="flexR col-12">
              <FontAwesomeIcon className="icon" icon={faHandsHoldingChild} />
              <span>{data?.phoneNumber}</span>
            </div>
          </div>
          <div className="card1 ">
            <span className="titlee">locc</span>
            <div className="flexR col-12">
              <FontAwesomeIcon className="icon" icon={faHandsHoldingChild} />
              <span>{data?.phoneNumber}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="col-12 bootom">
        <ul className="col-12">
          <li className="col-12">This person may be mentally ill or have special needs.</li>
          <li className="col-12">
            If he is found, please contact his caregiver by phone or deliver him
            to this address.
          </li>
          <li className="col-12">
            Please do not leave this person until you are sure that he is in a
            safe place.
          </li>
          <li className="col-12">
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
