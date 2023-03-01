import React from "react";
import styles from "./list-item.module.css";
import { useState } from "react";
import Popup from "../popup/popup";
const ListItem = (props: any) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const openCheck = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const setCheckBox = (event: any) => {
    event.stopPropagation();
    const checkbox = document.getElementsByClassName("checkbox") as any;
    if (checkbox.checked) setChecked(false);
    else setChecked(true);
  };
  return (
    <div className={styles.item} onClick={openCheck}>
      <span>{props.index}</span>
      <span>{props.title}</span>
      <span>{props.desc}</span>
      <span>
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={checked}
          onClick={setCheckBox}
        />
      </span>
      {open ? (
        <Popup
          index={props.index}
          title={props.title}
          desc={props.desc}
          openCheck={openCheck}
          checked={checked}
          setChecked={setChecked}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ListItem;
