import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      padding={3}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* item inside the slider */}
      <List>
        <Link className="navLink" to="http://localhost:3000/">
          <ListItemButton>
            <ListItemText className="navItem" primary={"الرئيسية"} />
          </ListItemButton>
        </Link>
        <Link className="navLink" to="http://localhost:3000/1">
          <ListItemButton>
            <ListItemText className="navItem" primary={"مشاريعنا"} />
          </ListItemButton>
        </Link>
        <Link className="navLink" to="http://localhost:3000/1">
          <ListItemButton>
            <ListItemText className="navItem" primary={"عن المناراة الشامخة"} />
          </ListItemButton>
        </Link>
        <Link className="navLink" to="http://localhost:3000/1">
          <ListItemButton>
            <ListItemText className="navItem" primary={"خدماتنا"} />
          </ListItemButton>
        </Link>
        <Link className="navLink" to="http://localhost:3000/1">
          <ListItemButton>
            <ListItemText className="navItem" primary={"مميزاتنا"} />
          </ListItemButton>
        </Link>
        <Link className="navLink" to="http://localhost:3000/1">
          <ListItemButton>
            <ListItemText className="navItem" primary={"موقعنا"} />
          </ListItemButton>
        </Link>
      </List>
      <Divider />
    </Box>
  );
  // this is the icon on home screen
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#FFF",
        padding: "5px",
      }}
    >
      {
        <div style={{ width: "55px", height: "55px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://i.ibb.co/gzxm0P9/Whats-App-Image-2023-07-29-at-2-53-40-PM.jpg"
            alt="logo"
          />
        </div>
      }
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
