import React from "react";
import CustomTabs from "./CustomTabs";

const TabTest = () => {
  const RandomContent = () => {
    return <div>This is some random content</div>;
  };

  const tab = [
    {
      label: "Tab 1",
      content: "This is content for Tab 1",
    },
    {
      label: "Tab 2",
      content: "This is content for Tab 2",
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  const handleChange = () => {
    // console.log("i am from tab test");
  };
  return <CustomTabs tabsContent={tab} onChange={handleChange} />;
};

export default TabTest;
