import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormFiledContainer,
  FormTextFiled,
} from "../../Styles/form";

export default function Form({ fromBanner }) {
  let usenavigate = useNavigate();
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableSubmit(true);
    const data = new FormData(event.currentTarget);
    await axios
      .post("/api/v1/form", {
        name: data.get("name"),
        phoneNumber: data.get("phoneNumber"),
        message: data.get("message"),
      })
      .then((res) => {
        usenavigate("/form-sent");
      })
      .catch((err) => console.log(err));
  };
  return (
    <FormContainer item md={3} xs={6} fromBanner={fromBanner}>
      <Typography
        variant="h6"
        component="h2"
        fontWeight={"bold"}
        mb={"5px"}
        mt={"10px"}
      >
        يسعدنا تواصلك
      </Typography>
      <FormFiledContainer onSubmit={handleSubmit} component="form">
        <FormTextFiled
          name="name"
          type="String"
          label="الاسم"
          placeholder="الاسم الثنائي"
          variant="outlined"
          required
        />

        <FormTextFiled
          label="الجوال"
          type="number"
          name="phoneNumber"
          variant="outlined"
          placeholder="05XXXXXXXX"
          required
        />

        <FormTextFiled
          type="String"
          label="الطلب"
          name="message"
          variant="outlined"
          multiline
        />

        <Button type="submit" disabled={disableSubmit}>
          أرسل
        </Button>
      </FormFiledContainer>
    </FormContainer>
  );
}
