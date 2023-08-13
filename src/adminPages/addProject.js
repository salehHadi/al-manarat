import { Box } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");
  const [appartements, setAppartements] = useState("");
  const [roofs, setRoofs] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form
        encType="multipart/form-data"
        id="form"
        method="post"
        action="http://localhost:4000/api/v1/addproject"
      >
        <div>
          <h3>projectName</h3>
          <input
            required
            name="projectName"
            type="String"
            value={projectName}
            onInput={(e) => setProjectName(e.target.value)}
          />
          <h3>status</h3>
          <input
            required
            name="status"
            type="String"
            value={status}
            onInput={(e) => setStatus(e.target.value)}
          />
          <h3>Area</h3>
          <input
            required
            name="area"
            type="String"
            value={area}
            onInput={(e) => setArea(e.target.value)}
          />
          <h3>Floors</h3>
          <input
            required
            name="floors"
            type="Number"
            value={floors}
            onInput={(e) => setFloors(e.target.value)}
          />
          <h3>appartements</h3>
          <input
            required
            name="appartements"
            type="Number"
            value={appartements}
            onInput={(e) => setAppartements(e.target.value)}
          />
          <h3>Roofs</h3>
          <input
            required
            name="roofs"
            type="Number"
            value={roofs}
            onInput={(e) => setRoofs(e.target.value)}
          />
        </div>
        <h3>Images</h3>
        <input
          // required
          type="file"
          name="photos"
          accept="image/x-png,image/gif,image/jpeg"
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default AddProduct;
