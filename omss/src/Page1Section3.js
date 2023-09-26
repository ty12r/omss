import Portfolio from "./portfolio";
import logo from "./omss.svg";
import React, { useState } from "react";
import "./Page1Section3.css";

const Page1Section3 = () => {
  let [slogan, sloganChange] = useState([
    "당신의 상상을, 현실로.",
    "이상적 현실을, 현실로 만드는 사람들.",
    "지금 당장 당신의 아이디어를 \n현실로 만들어보세요.",
  ]);

  let [subtext, subtextChange] = useState([
    "당신의 찬란한 아이디어가 막연한 상상에 그치지 않도록,\n콘셉트 구체화부터 제품 설계, 시뮬레이션, 시제품 생산까지 한 번에.",
    "당신의 찬란한 아이디어가 막연한 상상에 그치도록 놔두지 못하는 \n원마이크로세컨즈 엔지니어링팀 이야기.",
    "당신의 찬란한 아이디어가 막연한 상상에 그치지 않도록, \n콘셉트 구체화부터 제품 설계, 시뮬레이션, 시제품 생산까지. 버튼 한 번이면 충분해요.",
  ]);

  let [more, moreChange] = useState(["시작하기", "더 알아보기", "더보기"]);

  return (
    <div id="Page1Section3" className="section">
      {" "}
      {
        <div className="Parent">
          <div className="Header">
            <div className="Top">
              <img src={logo} alt="logo" className="Logo" />
            </div>
          </div>

          <div className="Box1">
            <div className="Main-Text">{slogan[2]}</div>
            <div className="Sub-Text">{subtext[2]}</div>
            <div className="Btn">
              <button type="button" className="More-Btn">
                {more[0]}
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Page1Section3;
