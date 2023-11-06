import Form from "react-bootstrap/Form";
import { IProduct } from "../Interface/Product";
import { useState, useContext } from "react";
import { ProductContext } from "../Context/Product";
import "../App.scss";
const AddProd = () => {
  const { onHandleAdd } = useContext(ProductContext);
  const [valueInput, setValueInput] = useState<IProduct>({
    name: "",
    description: "",
  });
  const onHandleInput = (e: any) => {
    const { name, value } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (valueInput) {
      onHandleAdd(valueInput);
    }
  };
  return (
    <div>
      <Form onSubmit={onSubmit} className="fomrAdd">
        <h1 className="addTitle">Add form</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label id="email">Name</Form.Label>
          <Form.Control name="name" onInput={onHandleInput} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            onInput={onHandleInput}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <button className="btn btn-danger">Link</button>
      </Form>
    </div>
  );
};

export default AddProd;
