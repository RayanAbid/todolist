import React from "react";

function MyButton({ text, onClick, color, style }) {
  return (
    <button
      style={style ? style : {}}
      className="btnMain"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;
