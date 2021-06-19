import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";

const ImageUpload = ({ formData, setForm, navigation }) => {
  const { image } = formData;
  const { images, setImages } = useState([]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Step 4 of 6</h2>
        <h3>Image Your Upload</h3>
        <img
          src={
            !images ? "https://image.pngaaa.com/189/734189-middle.png" : images
          }
          alt="profile"
          style={{ width: "90px" }}
        />
        <div>
          <input type="file" name="image" />
          <button>Upload</button>
        </div>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            onClick={() => navigation.previous()}
            variant="contained"
            color="secondary"
          >
            Back
          </Button>
          <Button
            onClick={() => navigation.next()}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ImageUpload;
