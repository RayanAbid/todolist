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
  saveLocally,
}) {
  return (
    <div key={item?.id} className="itemContainer">
      <input
        onChange={() => {
          if (item?.isChecked) {
            var arr = [...list];
            arr[index].isChecked = false;
            setList(arr);
            saveLocally(arr);
          } else {
            var arr = [...list];
            arr[index].isChecked = true;
            setList(arr);
            saveLocally(arr);
          }
        }}
        className={"ml10 "}
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
        style={{
          color: "white",
          backgroundColor: "#1da1f2",
        }}
        onClick={(e) => {
          e.preventDefault();
          setText(item?.text);
          setEditIndex(index);
          setIsEdit(true);
        }}
      />
      <span className={"ml10"} />

      <MyButton
        style={{
          color: "white",
          backgroundColor: "#f12711",
        }}
        text={"Del me"}
        onClick={(e) => {
          onDel(e);
        }}
      />
    </div>
  );
}

export default ListItem;
