import React from "react";
import { Container, Button } from "@material-ui/core";
import ImageUploader from "react-images-upload";

const ImageUpload = ({ formData, setForm, navigation }) => {
  const { image } = formData;

  // const imageHandler = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const reader = new FileReader();

  //     reader.onload = function (e) {
  //       setForm({
  //         value: e.target.result,
  //       });
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Step 4 of 6</h2>
        <h3>Image Your Upload</h3>
        <img
          src={
            !image ? "https://image.pngaaa.com/189/734189-middle.png" : image
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
