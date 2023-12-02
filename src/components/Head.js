import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRdZoylWjqQmhkWOkw5wYAHmiakeHNW1Y1UxQ1V_p0FXk97JTmdDPiPxuUAG0r8zTOOg&usqp=CAU"
          alt="menu"
        ></img>
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
          alt="logo"
        ></img>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
        ></input>
        <button className="p-2 border border-gray-400 rounded-r-full pl-2 pr-5 bg-gray-100">
          search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="User"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaK4yFv0RrTL45ZHB-Y7ffuMX1_F_cQbniVYxoEp3Ecr8_6HeKCnKbOgmIyeB0647Cgw&usqp=CAU"
        ></img>
      </div>
    </div>
  );
};

export default Head;
