import "./ListProd.scss";
import { ProductContext } from "../Context/Product";
import { useContext } from "react";
import { IProduct } from "../Interface/Product";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ListProd = () => {
  const { products, onhandleDelete } = useContext(ProductContext);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleDelete = () => {
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
          onhandleDelete(1);
        }
      });
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
                  onClick={() => handleDelete()}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
                <button className="btn btn-success">update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProd;
