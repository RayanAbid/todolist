import React, { useState } from "react";
import MyButton from "./MyButton";

function ListItem({
  item,
  index,
  onDel,
  setList,
  setText,
  setEditIndex,
  setIsEdit,
  list,
}) {
  return (
    <div key={item?.id} className="itemContainer">
      <input
        onChange={() => {
          if (item?.isChecked) {
            var arr = [...list];
            arr[index].isChecked = false;
            setList(arr);
          } else {
            var arr = [...list];
            arr[index].isChecked = true;
            setList(arr);
          }
          console.log("testing", item);
        }}
        className={"ml10"}
        defaultChecked={item?.isChecked}
        type={"checkbox"}
      />
      <p
        className={"ml10"}
        style={{
          textDecoration: item?.isChecked ? "line-through" : "none",
        }}
        key={index}
      >
        {item?.text}
      </p>
      <span className={"ml10"} />
      <MyButton
        text={"Edit me"}
        onClick={(e) => {
          e.preventDefault();
          setText(item?.text);
          setEditIndex(index);
          setIsEdit(true);
        }}
      />
      <span className={"ml10"} />

      <MyButton
        color="#f12711"
        text={"Del me"}
        onClick={(e) => {
          onDel(e);
        }}
      />
    </div>
  );
}

export default ListItem;
