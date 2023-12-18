import { ProductButtons } from "./ProductButtons";
import { ProductCard } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export const ProductCardCompound = Object.assign(ProductCard, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCardCompound