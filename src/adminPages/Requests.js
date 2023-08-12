import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import AdminDashboard from "../adminComponent/AdminDashboard";
import SidebarHeader from "../adminComponent/Sidebar-Header";
import { Grid } from "@mui/material";

function createData(name, date, phoneNumber) {
  return {
    name,
    date,
    phoneNumber,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.phoneNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Message
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  Check your text for errors, choose the best possible
                  corrections from the suggested ones, and learn with the help
                  of our service. The algorithm will detect syntactic,
                  grammatical, and stylistic errors, suggest replacement
                  options, and explain its decision in detail. On
                  SentenceChecker.com you can check the text of any complexity,
                  because our databases contain a large number of rules. We have
                  made sure that working with the text is convenient and fast
                  for you. Here’s how to use our tool...
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.number.isRequired,
    phoneNumber: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", "16 Mar, 2019", "0573791514"),
  createData("Ice cream sandwich", "16 Mar, 2019", "0573791514"),
  createData("Eclair", "16 Mar, 2019", "0573791514"),
  createData("Cupcake", "16 Mar, 2019", "0573791514"),
  createData("Gingerbread", "16 Mar, 2019", "0573791514"),
  createData("Frozen yoghurt", "16 Mar, 2019", "0573791514"),
  createData("Ice cream sandwich", "16 Mar, 2019", "0573791514"),
  createData("Eclair", "16 Mar, 2019", "0573791514"),
  createData("Cupcake", "16 Mar, 2019", "0573791514"),
  createData("Gingerbread", "16 Mar, 2019", "0573791514"),
  createData("Frozen yoghurt", "16 Mar, 2019", "0573791514"),
  createData("Ice cream sandwich", "16 Mar, 2019", "0573791514"),
  createData("Eclair", "16 Mar, 2019", "0573791514"),
  createData("Cupcake", "16 Mar, 2019", "0573791514"),
  createData("Gingerbread", "16 Mar, 2019", "0573791514"),
  createData("Frozen yoghurt", "16 Mar, 2019", "0573791514"),
  createData("Ice cream sandwich", "16 Mar, 2019", "0573791514"),
  createData("Eclair", "16 Mar, 2019", "0573791514"),
  createData("Cupcake", "16 Mar, 2019", "0573791514"),
  createData("Gingerbread", "16 Mar, 2019", "0573791514"),
];

export default function Requests() {
  return (
    <Grid
      sx={{
        display: "flex",
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <SidebarHeader />
      <Grid sx={{ width: "100%", overflow: "scroll" }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
