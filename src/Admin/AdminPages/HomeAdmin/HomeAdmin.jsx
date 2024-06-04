import React, { useEffect } from "react";
import "./HomeAdmin.scss";
import RoundedChart from "../../Charts/RoundedChart/RoundedChart";
import ColumnChart from "../../Charts/ColummChart/ColumnChart";
export default function HomeAdmin() {



  return (
    <div className="mainPage col-12">
      <div className="TopMain col-12">
        <div className="DashCard col-3">
          <div className="HeaderCard">
            <h4>Contact Us Count</h4>
          </div>
          <div className="ContentCard">
            <p>1050</p>
          </div>
          <div className="BottomCard">
            <p>Contact Us Count</p>
          </div>
        </div>
        <div className="DashCard col-3">
          <div className="HeaderCard ">
            <h4>Payments Count</h4>
          </div>
          <div className="ContentCard">
            <p>1000</p>
          </div>
          <div className="BottomCard">
            <p>Payments Count</p>
          </div>
        </div>
        <div className="DashCard col-3">
          <div className="HeaderCard">
            <h4>Sessions Count</h4>
          </div>
          <div className="ContentCard">
            <p>500</p>
          </div>
          <div className="BottomCard">
            <p>Sessions Count</p>
          </div>
        </div>
      </div>
      <div className="MiddleMain col-12">
        <ColumnChart />
        <RoundedChart />
      </div>
    </div>
  );
}
