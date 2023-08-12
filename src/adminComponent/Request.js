import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

function createData(id, date, name, PhoneNumber, Message) {
  return { id, date, name, PhoneNumber, Message };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "0546080503",
    "VISA ⠀•••• 3719"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "0573791514",
    "VISA ⠀•••• 3719"
  ),
  createData(2, "16 Mar, 2019", "Tom Scholz", "0576638198", "MC ⠀•••• 1253"),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "0594053061",
    "MC ⠀•••• 1253"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "0553432312",
    "VISA ⠀•••• 5919"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Request() {
  return (
    <React.Fragment>
      <Title>Recent Request</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.PhoneNumber}</TableCell>
              <TableCell>{row.Message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Requests
      </Link>
    </React.Fragment>
  );
}
