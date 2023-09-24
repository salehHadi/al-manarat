import React from "react";
import { Box, Grid, IconButton, Slide } from "@mui/material";
import {
  ButtonItemsContainer,
  GridTextContainer,
  Image,
  ImageContainer,
  ProductDetailContainer,
} from "../../Styles/productDetail";
import { SectionName } from "../../Styles/products";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const image = [
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692186457/projectImage/wrja36ettdvpwhg0oyeh.jpg",
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692612054/projectImage/pvx0z7fxfnm7noewazsi.jpg",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692186457/projectImage/wrja36ettdvpwhg0oyeh.jpg",
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692612054/projectImage/pvx0z7fxfnm7noewazsi.jpg",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692186457/projectImage/wrja36ettdvpwhg0oyeh.jpg",
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692612054/projectImage/pvx0z7fxfnm7noewazsi.jpg",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
];

export default function ProductDetail() {
  const containerRef = React.useRef();
  // eslint-disable-next-line
  const [messageIndex, setMessageIndex] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [showDirectionExsit, setShowDirectionExsit] = React.useState("");
  const [showDirectionEnter, setShowDirectionEnter] = React.useState("");
  const [imageDisplay, setImageDisplay] = React.useState(image[0]);

  function handelPhotoChange(turnDirection) {
    const rightTurn = turnDirection;
    rightTurn
      ? setShowDirectionExsit("left") || setShowDirectionEnter("right")
      : setShowDirectionExsit("right") || setShowDirectionEnter("left");

    setShow(false);

    setTimeout(() => {
      rightTurn
        ? setMessageIndex((i) => (i <= 0 ? image.length - 1 : i - 1))
        : setMessageIndex((i) => (i + 1) % image.length);
      setShow(true);
    }, 350);
  }

  const imageEl = image.map((el) => (
    <Box
      onClick={() => setImageDisplay(el)}
      sx={{
        heigit: "120px",
        width: "150px",
        display: "flex",
        alingItem: "center",
        padding: "15px",
      }}
    >
      <Image src={el} />
    </Box>
  ));

  return (
    <ProductDetailContainer>
      <SectionName>Product</SectionName>
      <ButtonItemsContainer>
        <IconButton onClick={() => handelPhotoChange(true)}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => handelPhotoChange(false)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </ButtonItemsContainer>

      <Slide
        sx={{ mt: 5 }}
        container={containerRef.current}
        direction={show ? showDirectionEnter : showDirectionExsit}
        in={show}
        timeout={{
          enter: 200,
          exit: 200,
        }}
      >
        <ImageContainer>
          <Image src={imageDisplay} />
        </ImageContainer>
      </Slide>

      {
        <Box
          sx={{
            heigit: "100px",
            margin: "auto",
            position: "relative",
            width: "90%",
            display: "grid",
            placeItem: "center",
            overflow: "scroll",
          }}
        >
          <Box sx={{ display: "flex" }}>{imageEl}</Box>
        </Box>
      }
      <GridTextContainer
        container
        // paddingRight={8}
        // paddingLeft={8}
        mt={2}
      >
        <Grid item xs={6} sx={{ background: "#D3D3D3" }}>
          M1
        </Grid>
        <Grid item xs={6} sx={{ background: "#D3D3D3" }}>
          : الاسم
        </Grid>
        <Grid item xs={6}>
          السامر
        </Grid>
        <Grid item xs={6}>
          الحي
        </Grid>
        <Grid item xs={6} sx={{ background: "#D3D3D3" }}>
          16
        </Grid>
        <Grid item xs={6} sx={{ background: "#D3D3D3" }}>
          عدد الشقق
        </Grid>
        <Grid item xs={6}>
          4
        </Grid>
        <Grid item xs={6}>
          عدد الادوار
        </Grid>
        <Grid item xs={6} sx={{ background: "#D3D3D3" }}>
          2
        </Grid>
        <Grid item xs={6} sx={{ background: "#D3D3D3" }}>
          عدد الملاحق
        </Grid>
      </GridTextContainer>
      <SectionName mt={3}>Project Detail</SectionName>
    </ProductDetailContainer>
  );
}
