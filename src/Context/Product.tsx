import { createContext, useEffect, useState } from "react";
import { IProduct } from "../Interface/Product";
import axios from "axios";
export const ProductContext = createContext([] as any);
const ProductContexProvider = ({ children }: any) => {
  //   const [product, setProduct] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(!isLoading);
  //       const data = await axios.post(`http://localhost:3000/products`);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  const onHandleAdd = (product: IProduct) => {
    try {
      (async () => {
        const data = await axios.post(
          `http://localhost:3000/products`,
          product
        );
      })();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <ProductContext.Provider value={{ onHandleAdd }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContexProvider;
