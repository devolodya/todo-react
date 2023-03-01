import React, { useState } from "react";
import styles from "./popup.module.css";

const Popup = ({ title, desc, openCheck, checked }: any) => {
  const [check, setCheck] = useState(checked);
  return (
    <div className={styles.popup}>
      <div className={styles.popupItem} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span>{desc}</span>
          <span>
            Status:{" "}
            <input
              type="checkbox"
              className="checkbox"
              defaultChecked={check}
            />
          </span>
          <button onClick={openCheck}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
