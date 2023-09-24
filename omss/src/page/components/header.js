import React, { useEffect, useState } from "react";

import logo from "./omss.svg";
import "/Users/tyler/Legacy/omss/omss/src/App.css";

export default function Header(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  return (
    <div class="Header">
      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
