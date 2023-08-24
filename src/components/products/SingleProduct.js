import { Product, ProductImage, ProductName } from "../../Styles/products";
import ProductMata from "./ProductMata";

export default function SingleProduct({ matches, product }) {
  return (
    /**
        how am I going to desing the page
    */
    <Product>
      <div style={{ height: "420px" }}>
        <ProductImage src={product.photo.secure_url} />
      </div>
      <ProductName>{product.projectName}</ProductName>
      <ProductMata product={product} />
    </Product>
  );
}
