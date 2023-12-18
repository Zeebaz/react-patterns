import { createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../../interfaces";
import { useProduct } from "../../hooks";
import styles from "../../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </ProductContext.Provider>
  );
};