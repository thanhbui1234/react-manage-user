import "./ListProd.scss";
import { ProductContext } from "../Context/Product";
import { useContext, useState } from "react";
import { IProduct } from "../Interface/Product";
import Swal from "sweetalert2";
import ModalUpdate from "./ModalUpdate";
const ListProd = () => {
  const [show, setShow] = useState(false);
  const { products, onhandleDelete, getProductUpdate } =
    useContext(ProductContext);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn mx-1 btn-success",
      cancelButton: "btn mx-1 btn-danger",
    },
    buttonsStyling: false,
  });

  const handleDelete = (product: IProduct) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result: any) => {
        if (result.isConfirmed) {
          onhandleDelete(product);
        }
      });
  };

  const handleUpdate = (productUpdate: IProduct) => {
    getProductUpdate(productUpdate);
    console.log(productUpdate);

    setShow(!show);
  };

  return (
    <div className="listProd container">
      <h1 className="title-list">List users</h1>
      <table className="table table-bordered rounded shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: IProduct, index: number) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td className="d-flex gap-3">
                <button
                  onClick={() => handleDelete(product)}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
                <button
                  onClick={() => handleUpdate(product)}
                  className="btn btn-success"
                >
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalUpdate show={show} setShow={setShow} />
    </div>
  );
};

export default ListProd;
