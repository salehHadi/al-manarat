import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import { SectionName } from "../../Styles/products";

//
export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [productsData, setProductsData] = React.useState([]);

  React.useEffect(() => {
    const fun = async () => {
      await axios
        .get("api/v1/all-project")
        .then((res) => setProductsData(res.data.allProjects))
        .catch((err) => console.log(err));
    };
    fun();
    // eslint-disable-next-line
  }, [0]);

  const renderProducts = productsData.map((product) => (
    <Grid
      item
      key={product._id}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <SingleProduct product={product} matches={matches} />
    </Grid>
  ));

  return (
    <Container sx={{ marginTop: 5 }}>
      <Box
        display="flex"
        justifyContent={matches ? "end" : "center"}
        alignItems="center"
        sx={{ pt: 3 }}
        marginBottom={matches ? 5 : 10}
      >
        <SectionName>مشاريعنا</SectionName>
      </Box>
      <Grid
        container
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px" }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
