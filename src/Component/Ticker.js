import React, { useEffect } from "react";

export default function Ticker() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../Assets/js/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div id="timer"></div>
    </>
  );
}
