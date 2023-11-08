import "../App.scss";
import { createContext, useEffect, useState } from "react";
import { IProduct } from "../Interface/Product";
import axios from "axios";
import { toast } from "react-toastify";
export const ProductContext = createContext([] as any);
const ProductContexProvider = ({ children }: any) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({});
  const [isloading, setLoading] = useState<Boolean>(false);
  const onhandleDelete = (product: IProduct) => {
    try {
      (async () => {
        await axios
          .delete(`http://localhost:3000/products/${product.id}`)
          .then(() =>
            setProducts(products.filter((prod) => prod.id != product.id))
          )
          .then(() => toast.success("Xoa thanh cong"));
      })();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await axios
          .get(`http://localhost:3000/products`)
          .then(({ data }) => setProducts(data));
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onHandleAdd = (product: IProduct) => {
    try {
      (async () => {
        await axios
          .post(`http://localhost:3000/products`, product)
          .then(({ data }) => setProducts((prev) => [...prev, data]));
      })();
      toast.success("Them thanh cong nha cu !");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onHandleUpdate = (product: IProduct) => {
    console.log(product);
  };

  const getProductUpdate = (product: IProduct) => {
    (async () => {
      try {
        await axios
          .get(`http://localhost:3000/products/${product.id}`)
          .then(({ data }) => setProduct(data));
      } catch (error) {}
    })();
  };

  if (isloading) {
    return <div className="loading-container">loadding</div>;
  }
  return (
    <>
      <ProductContext.Provider
        value={{
          onHandleAdd,
          products,
          onhandleDelete,
          getProductUpdate,
          product,
          onHandleUpdate,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContexProvider;
