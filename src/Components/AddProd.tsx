// export default AddProd;
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProd from "./Modal";

function ModalAdd(props: any) {
  const { show, setShow } = props;

  const handleClose = () => setShow(!show);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProd setShow={setShow} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
