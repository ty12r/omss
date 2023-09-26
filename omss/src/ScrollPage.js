// src/components/ScrollPage.js
import "./ScrollPage.css";
import React, { useState } from "react";
import logo from "./omss.svg";
import Portfolio from "./portfolio";

const ScrollPage = () => {
  /* useState 를 사용해 추후 변경 가능성이 있는 Text 를 설정. */
  let [slogan, sloganChange] = useState([
    "당신의 상상을, 현실로.",
    "이상적 현실을, 현실로 만드는 사람들.",
    "지금 당장 당신의 아이디어를 \n현실로 만들어보세요.",
  ]);

  let [subtext, subtextChange] = useState([
    "당신의 찬란한 아이디어가 막연한 상상에 그치지 않도록,\n콘셉트 구체화부터 제품 설계, 시뮬레이션, 시제품 생산까지 한 번에.",
    "당신의 찬란한 아이디어가 막연한 상상에 그치도록 놔두지 못하는 \n원마이크로세컨즈 엔지니어링팀 이야기.",
  ]);

  let [more, moreChange] = useState(["시작하기", "더 알아보기", "더보기"]);

  return (
    <div
      className="scroll-page" /*Fullpage 구현을 위한 최상위 컨테이너 "scroll-page"*/
    >
      <div className="section" /* Fullpage 구현을 위한 섹션 "section" */>
        <div
          className="Header" /* 상단에 고정된 Header, 추후에 컴포넌트화 할 것 */
        >
          <div className="Top">
            <img src={logo} alt="logo" className="Logo" />
          </div>
        </div>
        <div className="Box1">
          <div className="Main-Text">{slogan[0]}</div>
          <div className="Sub-Text">{subtext[0]}</div>
          <div className="Btn">
            <button type="button" className="More-Btn">
              {more[0]}
            </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div
          className="Header" /* 상단에 고정된 Header, 추후에 컴포넌트화 할 것 */
        >
          <div className="Top">
            <img src={logo} alt="logo" className="Logo" />
          </div>
        </div>
        <div className="Box1">
          <Portfolio />
        </div>
      </div>
      <div className="section">
        <div className="Header">
          <div className="Top">
            <img src={logo} alt="logo" className="Logo" />
          </div>
        </div>
        <div className="Box1">
          <div className="Main-Text">{slogan[2]}</div>
          <div className="Sub-Text">{subtext[0]}</div>
          <div className="Btn">
            <button type="button" className="More-Btn">
              {more[0]}
            </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="Header">
          <div className="Top">
            <img src={logo} alt="logo" className="Logo" />
          </div>
        </div>
        <div className="Box1">
          <div className="Main-Text">{slogan[2]}</div>
          <div className="Sub-Text">{subtext[0]}</div>
          <div className="Btn">
            <button type="button" className="More-Btn">
              {more[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;
