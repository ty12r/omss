import Portfolio from "./portfolio";
import logo from "./omss.svg";
import React, { useState } from "react";
import "./Page1Section4.css";

function Page1Section4() {
  // 데이터 선언
  let [titleFooter, titleFooterChange] = useState([
    "onemicroseconds Co., Ltd. \nonemicroseconds engineering",
  ]);

  let [subTitleFooter, subTitleFooterChange] = useState([
    "[Seoul] 서울특별시 송파구 중대로 207, 2층 201호 원마이크로세컨즈 (OMSS) \n[Sejong] 세종특별자치시 조치원읍 모과나무길 36-1 원마이크로세컨즈 엔지니어링 (OMSS ENGR.) \n\n대표번호 : 02-6959-7506 \n고객문의 : cs@omss.kr \n\n사업자등록번호 : 281-86-02969 \n통신판매업등록번호 : 0000-서울송파-0000 \n\nomss.kr | omss.engineering | store.omss.kr",
  ]);

  return (
    <div id="Page1Section4" className="section2">
      {
        <div className="Parent2">
          <div
            className="Header" /* 상단에 고정된 Header, 추후에 컴포넌트화 할 것 */
          >
            <div className="Top">
              <img src={logo} alt="logo" className="Logo" />
            </div>
          </div>
          <div className="Box2">
            <div className="TitleFooter">{titleFooter[0]}</div>
            <div className="subTitleFooter">{subTitleFooter[0]}</div>
          </div>
        </div>
      }
    </div>
  );
}

export default Page1Section4;
