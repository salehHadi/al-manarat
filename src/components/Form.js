import React from "react";
import { CardContent, Grid, TextField, Typography } from "@mui/material";
import "../Styles/componentStyle.css";

const Form = () => {
  const style = {
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    textAlign: "right",
    boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0..5)",
  };

  return (
    <CardContent className="form">
      <Typography variant="h6" component="h2" fontWeight={"bold"}>
        يسعدنا تواصلك
      </Typography>
      <Grid spacing={1}>
        <Grid className="box" item marginBottom={1}>
          <TextField
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
            type="message"
            label="الطلب"
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
          <button className="form-btn">أرسل</button>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Form;
