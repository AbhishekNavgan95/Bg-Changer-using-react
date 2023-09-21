import React from "react";

const Btn = ({ color, setColor }) => {
  return (
    <button
      className="px-10 py-2 rounded-xl text-white text-2xl user-select-none shadow-xl border-black border-2"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
};

export default Btn;
