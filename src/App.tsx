import { useState } from "react";
import "./App.scss";
import ModalAdd from "./Components/AddProd";
import ListProd from "./Components/ListProd";
import ModalUpdate from "./Components/ModalUpdate";

function App() {
  const [show, setShow] = useState<Boolean>(false);
  const [showupdate, setShowUpdate] = useState<Boolean>(false);
  return (
    <div className="app-container">
      <button onClick={() => setShow(!show)} className="btnAdd btn btn-primary">
        Add
      </button>
      <ListProd></ListProd>
      <ModalAdd show={show} setShow={setShow} />
    </div>
  );
}

export default App;
