import * as React from "react";
// import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Request() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("api/v1/all-forms")
        .then((res) => setRows(res.data.customerRequests))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);
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
            <TableRow key={row._id}>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={"/requests"}>See more Requests</Link>
    </React.Fragment>
  );
}
