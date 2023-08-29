import React from "react";
import { Slide } from "@mui/material";
import { Image, ValuesContainer } from "../../Styles/ourValues";
import { SectionName } from "../../Styles/products";

const messages = [
  "https://i.ibb.co/5nZFsZr/m1.jpg",
  "https://i.ibb.co/XkRxX1v/m2.jpg",
];

export default function OurValues() {
  const containerRef = React.useRef();
  const [messageIndex, setMessageIndex] = React.useState(0);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 6000);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <ValuesContainer ref={containerRef}>
      <SectionName>رسالتنا</SectionName>

      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 600,
          exit: 500,
        }}
      >
        <Image src={messages[messageIndex]} />
      </Slide>
    </ValuesContainer>
  );
}
