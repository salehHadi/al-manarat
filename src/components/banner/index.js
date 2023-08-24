// import { useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { BannerContainer } from "../../Styles/banner";
import Form from "../form/index";

export default function Banner() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  const fromBanner = true;
  return (
    <BannerContainer>
      <Form fromBanner={fromBanner} />
    </BannerContainer>
  );
}
