import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [photos, setPhotos] = useState(null);

  const fileSelectedHandler = (e) => {
    setPhotos(e.target.files[0]);
    const formData = new FormData();
    formData.append("photos", e.target.files[0], e.target.files[0].name);
    setPhotos(formData);
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:4000/api/v1/addproject", photos)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Upload images</h2>
      </div>
      <h3>Images</h3>
      <input
        onEncrypted={FormData}
        type="file"
        name="photos"
        multiple
        onChange={(e) => fileSelectedHandler(e)}
        accept="image/x-png,image/gif,image/jpeg"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddProduct;
