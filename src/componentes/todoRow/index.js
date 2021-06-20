import ToDoCell from "../todoCell";

import { useDispatch } from "react-redux";
import { removeNote, archiveNote } from "../../redux/todoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faArchive,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import ToDoRowNav from "../todoRowNav";

export default function TodoRow({ data }) {
  const { name, created, category, content, _id } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <ToDoCell data={name} />
      <ToDoCell data={created} />
      <ToDoCell data={category} />
      <ToDoCell data={content} />
      <ToDoRowNav>
        <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => dispatch(removeNote(_id))}
        />
        <FontAwesomeIcon
          icon={faArchive}
          onClick={() => dispatch(archiveNote(_id))}
        />
      </ToDoRowNav>
    </div>
  );
}
