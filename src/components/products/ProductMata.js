import { Typography } from "@mui/material";
import { ProductMetaContainer } from "../../Styles/products";

export default function ProductMata({ product }) {
  return (
    <ProductMetaContainer>
      <Typography
        sx={{
          gridRow: "1",
          gridColumn: "1 / 3",
          border: "1px solid black",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "0 0 0 10px",
          fontWeight: "bold",
          color: "red",
          fontSize: "1.1rem",
          width: "100%",
          height: "100%",
        }}
      >
        {product.status}
      </Typography>
      <Typography
        sx={{
          gridRow: "2",
          gridColumn: "1 / 1",
          border: "1px solid black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: `'Readex ', sans-serif`,
        }}
      >
        عدد الطوابق: {product.floors}
      </Typography>
      <Typography
        sx={{
          gridRow: "2",
          gridColumn: "2 / 2",
          border: "1px solid black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: `'Readex ', sans-serif`,
        }}
      >
        الحي:
        {product.area}
      </Typography>
      <Typography
        sx={{
          gridRow: "3",
          gridColumn: "1 / 1",
          border: "1px solid black",
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: `'Readex ', sans-serif`,
        }}
      >
        عدد الاسطح: {product.roofs}
      </Typography>
      <Typography
        sx={{
          gridRow: "3",
          gridColumn: "2 / 2",
          border: "1px solid black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: `'Readex ', sans-serif`,
        }}
      >
        عدد الشقق: {product.appartements}
      </Typography>
    </ProductMetaContainer>
  );
}
