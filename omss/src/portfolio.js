import React, { useState } from "react";
import P1 from "./portfolio_1.png";
import "./portfolio.css";

function Portfolio() {
  // 데이터 선언
  let [Title, TitleChange] = useState([
    "SLA 레진 프린팅",
    "FDM ABS 프린팅 및 후가공",
  ]);

  let [subTitle, subTitleChange] = useState([
    "[3D 프린팅, SLA 고강도 투명레진] \n배색 확인용 샘플 제작 사례",
    "[3D 프린팅, FDM 내열성 ABS] \n시제품용 인클로져 소량 생산, 샌딩 및 도색 후가공 포함 사례",
  ]);

  return (
    <div className="Portfolio">
      <div className="Box">
        <div className="Image-Box1">
          <img src={P1} alt="P1" className="P1" />
          <div className="Title">{Title[0]}</div>
          <div className="subTitle">{subTitle[0]}</div>
        </div>
        <div className="Image-Box1">
          <img src={P1} alt="P1" className="P1" />
          <div className="Title">{Title[1]}</div>
          <div className="subTitle">{subTitle[1]}</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
