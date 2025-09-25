import React, { useState } from "react";

const RandomColorGenrator = () => {
  const [color, setColor] = useState("#000000");
  const [rgbColor, setRgbColor] = useState("rgb(0,0,0)");
  const [changeBtn, setChangeBtn] = useState("hex");

  const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const hexColorFunc = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomColor = Math.floor(Math.random() * colorArr.length);
      hexColor += colorArr[randomColor];
    }
    setColor(hexColor);
  };

  const rgbColorFunc = () => {
    let rgbNew = null;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    rgbNew = `rgb(${r},${g}, ${b})`;

    setRgbColor(rgbNew);
  };

  return (
    <div
      className="main-body"
      style={{ backgroundColor: changeBtn === "hex" ? color : rgbColor }}
    >
      <button onClick={() => setChangeBtn(changeBtn === "hex" ? "rgb" : "hex")}>
        {changeBtn === "hex" ? "Change to rgb" : "change to hex"}
      </button>

      <button onClick={() => hexColorFunc()}>Generate hex Color</button>

      <button onClick={() => rgbColorFunc()}>Generate rgb Color</button>

      <p className="hex-name">{changeBtn === "hex" ? color : rgbColor}</p>
      {console.log(rgbColor)}
    </div>
  );
};

export default RandomColorGenrator;
