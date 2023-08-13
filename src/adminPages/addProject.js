import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddProduct = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);
  let usenavigate = useNavigate();

  const style = {
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    textAlign: "right",
    boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0..5)",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableSubmit(true);
    const data = new FormData(event.currentTarget);

    const storeData = {
      projectName: data.get("projectName"),
      status: "soon",
      area: data.get("area"),
      floors: data.get("floors"),
      appartements: data.get("appartements"),
      roofs: data.get("roofs"),
      photos: data.get("photos"),
    };
    console.log(storeData);
    await axios
      .post("/api/v1/addproject", storeData)
      .then((res) => {
        console.log(res);
        usenavigate("/dashBoard");
      })
      .catch((err) => {
        console.log(err);
        setDisableSubmit(false);
      });
  };

  return (
    <Box
      encType="multipart/form-data"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>projectName</h3>
      <TextField
        label="projectName"
        name="projectName"
        variant="outlined"
        className="box"
        type="String"
        placeholder="إسم المشروع"
        required
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          style: style,
        }}
      />
      <h3>status</h3>
      <FormControl fullWidth>
        <InputLabel id="status">status</InputLabel>
        <Select labelId="status" id="status" name="status" label="status">
          <MenuItem value={"soon"}>Soon</MenuItem>
          <MenuItem value={"startSelling"}>Start Selling</MenuItem>
          <MenuItem value={"soldOut"}>Sold out</MenuItem>
        </Select>
      </FormControl>
      <h3>Area</h3>
      <TextField
        label="area"
        name="area"
        variant="outlined"
        className="box"
        type="String"
        placeholder="area"
        required
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          style: style,
        }}
      />
      <h3>Floors</h3>
      <TextField
        // label="الجوال"
        type="Number"
        name="floors"
        variant="outlined"
        className="box"
        // placeholder="05XXXXXXXX"
        required
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          style: style,
        }}
      />
      <h3>appartements</h3>
      <TextField
        label="appartements"
        type="Number"
        name="appartements"
        variant="outlined"
        className="box"
        // placeholder="05XXXXXXXX"
        required
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          style: style,
        }}
      />
      <h3>Roofs</h3>

      <TextField
        label="roofs"
        type="Number"
        name="roofs"
        variant="outlined"
        className="box"
        // placeholder="05XXXXXXXX"
        required
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          style: style,
        }}
      />
      <h3>Images</h3>
      <Button variant="contained" component="label">
        Upload File
        <input
          // required
          id="photos"
          type="file"
          name="photos"
          accept="image/x-png,image/gif,image/jpeg"
        />
      </Button>
      <Button type="submit" disabled={disableSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default AddProduct;
