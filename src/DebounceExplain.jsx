import React, { useState } from "react";

const DebounceExplain = () => {
  const useDebounce = (cb, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const [searchData, setSearchData] = useState("");
  const ddata = useDebounce((e) => setSearchData(e.target.value), 1000);
  return (
    <div className="">
      <input
        type="search"
        className="text-black p-2 m-auto"
        onChange={(e) => ddata(e)}
      />
      <p>{searchData}</p>
    </div>
  );
};

export default DebounceExplain;
