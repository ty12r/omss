import React, { useState } from "react";
import P1 from "./portfolio_1.png";
import "./portfolio.css";

function Portfolio() {
  const openLinkInNewTab = () => {
    window.open("https://www.instagram.com/onemicroseconds", "_blank"); // '_blank' 속성으로 새 창에서 열기
  };

  // 데이터 선언
  let [Title, TitleChange] = useState([
    "SLA 레진 프린팅",
    "FDM ABS 프린팅 및 후가공",
    "AL6061 5축 CNC",
    "시제품 디자인 및 시뮬레이션",
  ]);

  let [subTitle, subTitleChange] = useState([
    "[3D 프린팅, SLA 고강도 투명레진] \n배색 확인용 샘플 제작 사례",
    "[3D 프린팅, FDM 내열성 ABS] \n시제품용 인클로져 소량 생산, \n샌딩 및 도색 후가공 포함 사례",
    "[CNC 가공, AL6061] \n부품용 인클로져 소량생산, \n샌드블라스팅 및 아노다이징 포함 사례",
    "[제품디자인] \n자동차 부품용 인클로져 디자인, \n제품 디자인 및 비선형 접촉해석, 진동해석 사례",
  ]);

  let [mainText, mainTextChage] = useState([
    "지금은 현실이된, 누군가의 상상들.",
  ]);

  let [subText, subTextChage] = useState(["이제 당신 차례에요. 서둘러요."]);

  return (
    <div className="Portfolio">
      <div className="TitlePortfolio">{mainText[0]}</div>
      <div className="subTitlePortfolio">{subText[0]}</div>
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
        <div className="Image-Box1">
          <img src={P1} alt="P1" className="P1" />
          <div className="Title">{Title[2]}</div>
          <div className="subTitle">{subTitle[2]}</div>
        </div>
        <div className="Image-Box1">
          <img src={P1} alt="P1" className="P1" />
          <div className="Title">{Title[3]}</div>
          <div className="subTitle">{subTitle[3]}</div>
        </div>
      </div>
      <div className="Btn2">
        <button type="button" className="Link-Btn" onClick={openLinkInNewTab}>
          더 둘러보기
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
