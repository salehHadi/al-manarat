import { ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../Styles/appbar";
import PlaceIcon from "@mui/icons-material/Place";
export default function AppbarDesktop({ matches }) {
  return (
    /**
     * Appbar container
     * Header
     * list
     */
    <AppbarContainer>
      <AppbarHeader>Al-Manarat</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="OurProject" />
        <ListItemText primary="AboutUs" />
        <ListItemText primary="OurServices" />
        <ListItemText primary="OurUniquenes" />
        <ListItemIcon
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItemText primary="Location" />
          <PlaceIcon />
        </ListItemIcon>
      </MyList>
    </AppbarContainer>
  );
}
