// export default AddProd;
import Modal from "react-bootstrap/Modal";
import Update from "./Update";

function ModalUpdate(props: any) {
  const { show, setShow } = props;

  const handleClose = () => setShow(!show);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Update setShow={setShow} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdate;
