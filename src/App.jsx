import { useEffect, useState } from "react";
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

  useEffect(() => {
    getLocalVals();
  }, []);

  const getLocalVals = async () => {
    var storedItems = await JSON.parse(localStorage.getItem("items"));
    if (storedItems != null) {
      setList(storedItems);
    }
  };
  const saveLocally = async (arr) => {
    console.log("katysudyte", arr);
    await localStorage.setItem("items", JSON.stringify(arr));
  };

  const onDel = (e, index) => {
    e.preventDefault();
    var arr = [...list];
    arr.splice(index, 1);
    setList(arr);
    saveLocally(arr);
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
    saveLocally(arr);
  };

  const onEdit = (e) => {
    e.preventDefault();
    var arr = [...list];
    arr[editIndex].text = text;
    setText("");
    setIsEdit(false);

    setList(arr);
    saveLocally(arr);
  };

  return (
    <div className="App">
      <div className="heroSection">
        <h2 className="headingText">My Todolist</h2>
        <p className="headingPara">A simple todolist using React Js</p>
      </div>
      <div className="listContainer">
        <input
          className="inputMain "
          value={text}
          placeholder="Enter Task"
          onChange={(e) => setText(e.target.value)}
        />

        <MyButton
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          text={isEdit ? "Edit Item" : "Add Item"}
          onClick={(e) => {
            if (!isEdit) {
              onAdd(e);
            } else {
              onEdit(e);
            }
          }}
        />
        {isEdit && (
          <MyButton
            style={{
              // borderTopLeftRadius: 0,
              // borderBottomLeftRadius: 0,
              backgroundColor: "#f12711",
              marginLeft: 10,
            }}
            text={"Cancel"}
            onClick={(e) => {
              setIsEdit(false);
              setText("");
              setEditIndex(-1);
            }}
          />
        )}
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
                saveLocally={(e) => {
                  saveLocally(e);
                }}
              />
            ))
          : "Add Item"}
      </div>
    </div>
  );
}

export default App;
