import Form from "react-bootstrap/Form";
import { IProduct } from "../Interface/Product";
import { useState, useContext } from "react";
import { ProductContext } from "../Context/Product";
const Update = ({ setShow }: any) => {
  const { onHandleUpdate, product } = useContext(ProductContext);
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
      onHandleUpdate(valueInput);
    }
  };
  return (
    <div>
      <Form onSubmit={onSubmit} className="fomrAdd">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label id="email">Name</Form.Label>
          <Form.Control
            defaultValue={product.name}
            name="name"
            onInput={onHandleInput}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            defaultValue={product.description}
            onInput={onHandleInput}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <div>
          <button className="btn btn-danger">Add</button>
        </div>
      </Form>
    </div>
  );
};
export default Update;
