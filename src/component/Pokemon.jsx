import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ id, name, image }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="flex items-center flex-col rounded-lg shadow-lg p-4 hover:bg-gradient-to-b hover:from-[#B993D6] hover:to-[#8CA6DB] transition-all ease-in-out duration-300">
        <p className="text-base font-mono tracking-widest">{name}</p>
        <img src={image} className="h-[100px]" alt="" />
      </div>
    </Link>
  );
};

export default Pokemon;
