import "../App.scss";
import { createContext, useEffect, useState } from "react";
import { IProduct } from "../Interface/Product";
import axios from "axios";
import { toast } from "react-toastify";
export const ProductContext = createContext([] as any);
const ProductContexProvider = ({ children }: any) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isloading, setLoading] = useState<Boolean>(false);
  const onhandleDelete = (product: number) => {
    console.log(product);
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

  if (isloading) {
    return <div className="loading-container">loadding</div>;
  }
  return (
    <>
      <ProductContext.Provider
        value={{ onHandleAdd, products, onhandleDelete }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContexProvider;
