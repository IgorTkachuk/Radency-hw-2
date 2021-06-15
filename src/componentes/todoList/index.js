import { useSelector, useDispatch } from "react-redux";
import {addNote, removeNote, updateNote, archiveNote} from '../../redux/todoSlice';

import ToDoRow from '../todoRow';

import styles from './style.module.css';

export function ToDoList () {
  const state = useSelector((state) => state.todo);
  // const dispatch = useDispatch();

  return(
    <div className={styles.todo}>
      <div className={styles.header}>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
      </div>
      {
        state.map(el => <ToDoRow data={el}/>)
      }
    </div>
  );
}