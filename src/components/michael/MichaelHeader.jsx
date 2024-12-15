import React from "react";
import MichaelHeaderLeft from "./MichaelHeaderLeft";
import MichaelHeaderRight from "./MichaelHeaderRight";

const MichaelHeader = () => {
  return (
    <div className="flex justify-between items-center   fixed top-14 left-0 w-full z-[999]">
      {/* Left Section */}
      <MichaelHeaderLeft/>

      {/* Right Section */}
      <MichaelHeaderRight/>
      
    </div>
  );
};

export default MichaelHeader;
