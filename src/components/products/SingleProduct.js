import { Product, ProductImage, ProductName } from "../../Styles/products";
import { UseUIContext } from "../../context/ui";
import ProductMata from "./ProductMata";

export default function SingleProduct({ product }) {
  const { setProductDetail } = UseUIContext();
  return (
    <Product onClick={() => setProductDetail(product)}>
      <div style={{ height: "420px" }}>
        <ProductImage src={product.photo.secure_url} />
      </div>
      <ProductName>{product.projectName}</ProductName>
      <ProductMata product={product} />
    </Product>
  );
}
