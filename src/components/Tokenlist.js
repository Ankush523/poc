import React from "react";
import {data} from "../data";
const Tokenlist = () => {
  return (
    <div>
      {data.map((token) => {
        const { id, name, address, logo } = token;
        return (
          <div key={id}>
            <img src={logo}/>
            <label className="text-white1">{name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Tokenlist;
