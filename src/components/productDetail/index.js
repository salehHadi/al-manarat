import React from "react";
import { IconButton, Slide } from "@mui/material";
import {
  ButtonItemsContainer,
  Image,
  ImageContainer,
  ProductDetailContainer,
} from "../../Styles/productDetail";
import { SectionName } from "../../Styles/products";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// eslint-disable-next-line
const image = [
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692186457/projectImage/wrja36ettdvpwhg0oyeh.jpg",
  "https://res.cloudinary.com/dxakjslun/image/upload/v1692612054/projectImage/pvx0z7fxfnm7noewazsi.jpg",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
];

export default function ProductDetail() {
  const containerRef = React.useRef();
  const [messageIndex, setMessageIndex] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [showDirectionExsit, setShowDirectionExsit] = React.useState("");
  const [showDirectionEnter, setShowDirectionEnter] = React.useState("");

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

  return (
    <ProductDetailContainer>
      <SectionName>Product</SectionName>
      <ButtonItemsContainer>
        <IconButton onClick={() => handelPhotoChange(true)}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          // onClick={() => setMessageIndex((i) =>  (i + 1) % image.length)}
          onClick={() => handelPhotoChange(false)}
        >
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
          <Image src={image[messageIndex]} />
        </ImageContainer>
      </Slide>
    </ProductDetailContainer>
  );
}
