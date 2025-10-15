import React, { useState } from "react";

const CustomTabs = ({ tabsContent, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (getCurrentIndex) => {
    setCurrentIndex(getCurrentIndex);
    onChange(getCurrentIndex);
    console.log("you clicked", getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <h1>Custom Tabs</h1>
      <div className="tabs-wrapper">
        {tabsContent.map((item, index) => (
          <div
            className={`tabs ${currentIndex === index ? "active" : null}`}
            key={item.label}
            onClick={() => handleClick(index)}
          >
            <h2>{item.label}</h2>
          </div>
        ))}
      </div>
      <div className="content-container">
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
