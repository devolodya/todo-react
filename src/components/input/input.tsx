import React, { useState } from "react";
import styles from "./input.module.css";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../store/todo-slice";

const Input: React.FC = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [descErr, setDescErr] = useState("");
  const dispatch = useDispatch();

  const createTodo = () => {
    if (!title) {
      setTitleErr("This field is empty");
    }
    if (!desc) {
      setDescErr("This field is empty");
    }
    if (title && desc) {
      dispatch(updateTodo({ title, desc }));
      setTitleErr("");
      setDescErr("");
    }
  };

  return (
    <div className={styles.items}>
      <span>Title</span>
      <input
        placeholder="Title"
        id="title"
        style={
          titleErr === ""
            ? { border: "1px solid black" }
            : { border: "1px solid red" }
        }
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>{titleErr}</p>
      <span>Description</span>
      <input
        placeholder="Description"
        value={desc}
        id="desc"
        onChange={(e) => setDesc(e.target.value)}
        style={
          descErr === ""
            ? { border: "1px solid black" }
            : { border: "1px solid red" }
        }
      />
      <p>{descErr}</p>
      <button onClick={createTodo}>Create</button>
    </div>
  );
};

export default Input;
