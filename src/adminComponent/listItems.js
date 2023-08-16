import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const logout = async () => {
  await axios
    .get("api/v1/logout")
    .then((res) => {
      console.log(res);
      const cookies = new Cookies();
      cookies.remove("token", { path: "/" });
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

const btnItems = [
  {
    name: "Dashboard",
    to: "/dashBoard",
    icon: <DashboardIcon />,
    id: crypto.randomUUID(),
  },
  {
    name: "Requests",
    to: "/requests",
    icon: <AlignHorizontalLeftIcon />,
    id: crypto.randomUUID(),
  },
  {
    name: "Add new Users",
    to: "/authentication/signup",
    icon: <PeopleIcon />,
    id: crypto.randomUUID(),
  },
  {
    name: "Add new Project",
    to: "/product-add",
    icon: <AddCardIcon />,
    id: crypto.randomUUID(),
  },
];

const renderItem = btnItems.map((element) => {
  return (
    <Link key={element.id} to={element.to} style={{ textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>{element.icon}</ListItemIcon>
        <ListItemText primary={element.name} sx={{ color: "black" }} />
      </ListItemButton>
    </Link>
  );
});

export const mainListItems = (
  <React.Fragment>
    {renderItem}

    <ListItemButton onClick={logout}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
