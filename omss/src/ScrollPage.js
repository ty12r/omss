// src/components/ScrollPage.js
import "./ScrollPage.css";
import React, { useState } from "react";
import logo from "./omss.svg";

const ScrollPage = () => {
  let [slogan, sloganChange] = useState([
    "이상적 현실을, 현실로.",
    "이상적 현실을, 현실로 만드는 사람들.",
  ]);

  let [subtext, subtextChange] = useState([
    "당신의 찬란한 아이디어가 막연한 상상에 그치지 않도록,\n콘셉트 구체화부터 제품 설계, 시뮬레이션, 시제품 생산까지 한 번에.",
    "당신의 찬란한 아이디어가 막연한 상상에 그치도록 놔두지 못하는 원마이크로세컨즈 엔지니어링팀 이야기.",
  ]);

  let [more, moreChange] = useState(["시작하기", "더 알아보기", "더보기"]);
  return (
    <div className="scroll-page">
      <div className="section">
        <div className="Header">
          <div className="Top">
            <img src={logo} alt="logo" className="Logo" />
          </div>
        </div>
        <div className="Main-Text">{slogan[0]}</div>
        <div className="Sub-Text">{subtext[0]}</div>
        <div className="Btn">
          <button type="button" className="More-Btn">
            {more[0]}
          </button>
        </div>
      </div>
      <div className="section">
        <div className="Main-Text">{slogan[0]}</div>
        <div className="Sub-Text">{subtext[0]}</div>
        <div className="Btn">
          <button type="button" className="More-Btn">
            {more[0]}
          </button>
        </div>
      </div>
      <div className="section">
        <div className="Main-Text">{slogan[0]}</div>
        <div className="Sub-Text">{subtext[0]}</div>
        <div className="Btn">
          <button type="button" className="More-Btn">
            {more[0]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;
