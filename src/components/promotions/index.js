import React from "react";
import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../Styles/promotions";

const messages = [
  "Thank you for visting our website",
  "hope you find something valuable",
  "we can't wait to see you again",
];

export default function Promotions() {
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
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 250,
        }}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
