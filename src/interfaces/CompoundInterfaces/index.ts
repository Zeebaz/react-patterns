import { PropsWithChildren } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps extends PropsWithChildren {
  product: Product;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}


export interface ProductCardHOCProps {
    
}