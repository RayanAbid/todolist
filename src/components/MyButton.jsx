import React from "react";

function MyButton({ text, onClick, color }) {
  return (
    <button
      style={
        color
          ? {
              backgroundColor: color,
              color: "white",
            }
          : {}
      }
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
