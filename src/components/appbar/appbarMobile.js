import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../Styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceIcon from "@mui/icons-material/Place";
import { UseUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen } = UseUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
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
