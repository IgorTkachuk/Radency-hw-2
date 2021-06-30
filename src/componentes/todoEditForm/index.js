import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote } from "../../redux/todoSlice";

export default function ToDoEditNote({ _id = Date.now(), onClose }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.todo);
  const idx = state.findIndex((el) => el._id === _id);

  const [name, setName] = useState(idx > -1 ? state[idx].name : "");
  const [category, setCategory] = useState(idx > -1 ? state[idx].category : "");
  const [content, setContent] = useState(idx > -1 ? state[idx].content : "");

  let _archived, created, dates;

  if (idx === -1) {
    _archived = false;
    created = new Date().toLocaleDateString();
    dates = [];
  }

  return (
    <>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Content:
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button
        onClick={() => {
          console.log(idx);
          dispatch(
            idx === -1
              ? addNote({
                  name,
                  created,
                  category,
                  content,
                  dates,
                  _id,
                  _archived,
                })
              : updateNote({ _id, name, category, content })
          );
          onClose();
        }}
      >
        Close
      </button>
    </>
  );
}
