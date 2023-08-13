import React, { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "../Styles/componentStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let usenavigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  const style = {
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    textAlign: "right",
    boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0..5)",
  };
  const formBtn = {
    backgroundColor: "#5b4279",
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "10px",
    padding: "8px 20px",
    border: "none",
    borderRadius: "15px 0 15px 0",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableSubmit(true);
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      phoneNumber: data.get("phoneNumber"),
      message: data.get("message"),
    });
    await axios
      .post("/api/v1/form", {
        name: data.get("name"),
        phoneNumber: data.get("phoneNumber"),
        message: data.get("message"),
      })
      .then((res) => {
        console.log(res);
        usenavigate("/form-sent");
      })
      .catch((err) => console.log(err));
  };
  return (
    <CardContent className="form">
      <Typography variant="h6" component="h2" fontWeight={"bold"}>
        يسعدنا تواصلك
      </Typography>
      <Box onSubmit={handleSubmit} component="form">
        <Grid className="box" item marginBottom={1}>
          <TextField
            name="name"
            type="String"
            value={name}
            onInput={(e) => setName(e.target.value)}
            label="الاسم"
            placeholder="الاسم الثنائي"
            variant="outlined"
            className="box"
            required
            inputProps={{
              style: { textAlign: "right" },
            }}
            InputProps={{
              style: style,
            }}
          />
        </Grid>
        <Grid className="box" item marginBottom={1}>
          <TextField
            label="الجوال"
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onInput={(e) => setPhoneNumber(e.target.value)}
            variant="outlined"
            className="box"
            placeholder="05XXXXXXXX"
            required
            inputProps={{
              style: { textAlign: "right" },
            }}
            InputProps={{
              style: style,
            }}
          />
        </Grid>
        <Grid item marginBottom={1}>
          <TextField
            type="String"
            label="الطلب"
            name="message"
            value={message}
            onInput={(e) => setMessage(e.target.value)}
            variant="outlined"
            className="box"
            InputLabelProps={{ className: "box__cus" }}
            multiline
            rows={4}
            inputProps={{
              style: { textAlign: "right" },
            }}
            InputProps={{
              style: style,
            }}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <Button type="submit" disabled={disableSubmit} sx={formBtn}>
            أرسل
          </Button>
        </Grid>
      </Box>
    </CardContent>
  );
};

export default Form;
