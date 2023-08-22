import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../Styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceIcon from "@mui/icons-material/Place";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Al-Manarat
      </AppbarHeader>
      <IconButton>
        <PlaceIcon />
      </IconButton>
    </AppbarContainer>
  );
}
