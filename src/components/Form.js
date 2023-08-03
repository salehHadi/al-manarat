import React, { useState } from "react";
import { CardContent, Grid, TextField, Typography } from "@mui/material";
import "../Styles/componentStyle.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const style = {
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    textAlign: "right",
    boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0..5)",
  };

  return (
    <form method="post" action="http://localhost:4000/api/v1/form">
      <CardContent className="form">
        <Typography variant="h6" component="h2" fontWeight={"bold"}>
          يسعدنا تواصلك
        </Typography>
        <Grid>
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
            <button type="submit" className="form-btn">
              أرسل
            </button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

export default Form;
