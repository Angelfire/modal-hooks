import React from "react";
import Modal from "./components/Modal/Modal";
import useModal from "./hooks/useModal";

import "./App.css";

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle}>
        <p>Hello World</p>
      </Modal>
      <p className="more-info">
        <a
          href="https://github.com/Angelfire/modal-hooks"
          title="Modal using React Hooks"
        >
          Modal using React Hooks
        </a>
      </p>
    </div>
  );
};

export default App;
