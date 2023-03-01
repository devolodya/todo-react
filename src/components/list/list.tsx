import React from "react";
import styles from "./list.module.css";
import ListItem from "./list-item/list-item";
import { useSelector } from "react-redux/es/exports";
const List = () => {
  const todoSelector = useSelector((state: any) => state.todoSlice);
  return (
    <div>
      <div className={styles.header}>
        <span>ID</span>
        <span>Title</span>
        <span>Description</span>
        <span>Status</span>
      </div>
      {todoSelector.items.length === 0
        ? ""
        : todoSelector.items.map((item: any, index: number) => (
            <ListItem key={index} {...item} index={index + 1} />
          ))}
    </div>
  );
};

export default List;
