import React, { useState, useEffect } from "react";
import logo from "./omss.svg";
import "./App.css";
import ScrollPage from "./ScrollPage";

function App() {
  // 데이터 선언
  useEffect(() => {
    document.title = "원마이크로세컨즈 엔지니어링"; // 원하는 타이틀로 변경
  }, []);
  return (
    <div className="App">
      <ScrollPage />
    </div>
  );
}

export default App;
