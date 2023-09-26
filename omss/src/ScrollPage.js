// src/components/ScrollPage.js
import "./ScrollPage.css";
import React, { useState, useRef, useEffect } from "react";
import logo from "./omss.svg";
import Portfolio from "./portfolio";
import Page1Section1 from "./Page1Section1";
import Page1Section2 from "./Page1Section2";
import Page1Section3 from "./Page1Section3";
import Page1Section4 from "./Page1Section4";

const ScrollPage = () => {
  return (
    <div
      className="scroll-page" /*Fullpage 구현을 위한 최상위 컨테이너 "scroll-page"*/
    >
      <div className="section">
        <Page1Section1 />
      </div>
      <div className="section">
        <Page1Section2 />
      </div>
      <div className="section">
        <Page1Section3 />
      </div>
      <div className="sectionFooter">
        <Page1Section4 />
      </div>
    </div>
  );
};

export default ScrollPage;
