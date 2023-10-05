import React, { useState } from "react";
import C1 from "./clients_1.png";
import C2 from "./clients_2.png";
import C3 from "./clients_3.png";
import C4 from "./clients_4.png";
import C5 from "./clients_5.png";
import C6 from "./clients_6.png";
import C7 from "./clients_7.png";
import C8 from "./clients_8.png";
import "./clients.css";

function Portfolio() {
  const openLinkInNewTab = () => {
    window.open("https://www.instagram.com/onemicroseconds", "_blank"); // '_blank' 속성으로 새 창에서 열기
  };

  // 데이터 선언
  let [Title, TitleChange] = useState([
    "삼성화재",
    "고려대학교",
    "서울아산병원",
    "KEYSIGHT TECHNOLOGIES",
    "주식회사 코마스",
    "주식회사 센트론테크놀러지",
    "LG 에너지솔루션",
    "국립순천대학교",
  ]);

  let [subTitle, subTitleChange] = useState([
    "[3D 프린팅, SLA 고강도 투명레진] \n배색 확인용 샘플 제작 사례",
    "[3D 프린팅, FDM 내열성 ABS] \n시제품용 인클로져 소량 생산, \n샌딩 및 도색 후가공 포함 사례",
    "[CNC 가공, AL6061] \n부품용 인클로져 소량생산, \n샌드블라스팅 및 아노다이징 포함 사례",
    "[제품디자인] \n자동차 부품용 인클로져 디자인, \n제품 디자인 및 비선형 접촉해석, 진동해석 사례",
  ]);

  let [mainText, mainTextChage] = useState([
    "원마이크로세컨즈의 서비스를 경험한 클라이언트들.",
    "150+",
  ]);

  let [subText, subTextChage] = useState([
    "책상에 앉아 아이디어가 번뜩인 회사원부터, 국내외 검증된 기업들까지.",
    "제품화 프로젝트 수",
  ]);

  return (
    <div className="Portfolio">
      <div className="TitlePortfolio">{mainText[0]}</div>
      <div className="subTitlePortfolio">{subText[0]}</div>
      <div className="Box">
        <div className="Image-Box1">
          <img src={C1} alt="C1" className="C1" />
          <div className="Title2">{Title[0]}</div>
        </div>
        <div className="Image-Box1">
          <img src={C2} alt="C1" className="C1" />
          <div className="Title2">{Title[1]}</div>
        </div>
        <div className="Image-Box1">
          <img src={C3} alt="C1" className="C1" />
          <div className="Title2">{Title[2]}</div>
        </div>
        <div className="Image-Box1">
          <img src={C4} alt="C1" className="C1" />
          <div className="Title2">{Title[3]}</div>
        </div>
      </div>
      <div className="Box">
        <div className="Image-Box1">
          <img src={C5} alt="C1" className="C1" />
          <div className="Title2">{Title[4]}</div>
        </div>
        <div className="Image-Box1">
          <img src={C6} alt="C1" className="C1" />
          <div className="Title2">{Title[5]}</div>
        </div>
        <div className="Image-Box1">
          <img src={C7} alt="C1" className="C1" />
          <div className="Title2">{Title[6]}</div>
        </div>
        <div className="Image-Box1">
          <img src={C8} alt="C1" className="C1" />
          <div className="Title2">{Title[7]}</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
