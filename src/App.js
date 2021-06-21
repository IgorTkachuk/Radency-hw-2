import { ToDoList } from "./componentes/todoList";
import ToDoStat from "./componentes/todoStat";
import ToDoEditNote from "./componentes/todoEditForm";

import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [noteIdForChange, setNoteIdForChange] = useState();

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className='App'>
      <ToDoList onEdit={{ setIsShowModal, setNoteIdForChange }} />
      <button
        onClick={() => {
          setNoteIdForChange(undefined);
          setIsShowModal(true);
        }}
      >
        Add note...
      </button>
      <ToDoStat />
      <Modal isOpen={isShowModal} style={customStyles}>
        <ToDoEditNote onClose={closeModal} _id={noteIdForChange} />
      </Modal>
    </div>
  );
}

export default App;
