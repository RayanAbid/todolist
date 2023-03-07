import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListItem from "./components/ListItem";
import MyButton from "./components/MyButton";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const onDel = (e, index) => {
    e.preventDefault();
    var arr = [...list];
    arr.splice(index, 1);
    setList(arr);
  };

  const onAdd = (e) => {
    e.preventDefault();
    var arr = list;
    arr.push({
      text,
      id: `${text}${Math.floor(Math.random() * 10000)}`,
      isChecked: false,
    });
    setText("");
    setList(arr);
  };

  const onEdit = (e) => {
    e.preventDefault();
    var arr = [...list];
    arr[editIndex].text = text;
    setText("");
    setIsEdit(false);

    setList(arr);
  };

  return (
    <div className="App">
      <div className="heroSection"></div>
      <div className="listContainer">
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <MyButton
          text={isEdit ? "Edit Item" : "Add Item"}
          onClick={(e) => {
            if (!isEdit) {
              onAdd(e);
            } else {
              onEdit(e);
            }
          }}
        />
      </div>

      <div className="listMainContainer">
        {list?.length > 0
          ? list?.map((item, index) => (
              <ListItem
                item={item}
                index={index}
                onDel={(e) => {
                  onDel(e, index);
                }}
                list={list}
                setList={(e) => {
                  setList(e);
                }}
                setText={(e) => {
                  setText(e);
                }}
                setEditIndex={(e) => {
                  setEditIndex(e);
                }}
                setIsEdit={(e) => {
                  setIsEdit(e);
                }}
              />
            ))
          : "Add Item"}
      </div>
    </div>
  );
}

export default App;
