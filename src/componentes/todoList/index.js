import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {addNote, removeNote, updateNote, archiveNote} from '../../redux/todoSlice';

import ToDoRow from "../todoRow";

import styles from "./style.module.css";

export function ToDoList({ onEdit: { setIsShowModal, setNoteIdForChange } }) {
  const state = useSelector((state) => state.todo);
  const [showArchived, setShowArchived] = useState(false);
  // const dispatch = useDispatch();

  return (
    <div className={styles.todo}>
      <label>
        Show archived:
        <input
          type='checkbox'
          value={showArchived}
          onChange={() => setShowArchived(!showArchived)}
        />
      </label>
      <div className={styles.header}>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
      </div>
      {state
        .filter((el) => {
          if (showArchived) {
            return true;
          } else {
            return el._archived === false;
          }
        })
        .map((el) => (
          <ToDoRow
            data={el}
            showModal={setIsShowModal}
            setNoteIdForChange={setNoteIdForChange}
          />
        ))}
    </div>
  );
}
