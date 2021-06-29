import React, { useState } from "react";
//"https://www.vhv.rs/dpng/d/505-5058560_person-placeholder-image-free-hd-png-download.png"

const Profile = ({ register, errors }) => {
  const [image, setImage] = useState();
  const images = image;

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage({ src: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    // if (e.target.files && e.target.files[0]) {
    //   const reader = new FileReader();

    //   reader.onload = function (e) {
    //     const imageUp = e.target.result;
    //     setImage(imageUp);
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // }
  };

  console.log(image);

  return (
    <div>
      <div className="bg-white w-96  p-4 mb-4">
        <h2 className="text-left font-bold">Upload Your Image</h2>
        {/** image upload */}
        <div className="w-full text-left mb-3">
          <img
            src={
              !image
                ? "https://www.vhv.rs/dpng/d/505-5058560_person-placeholder-image-free-hd-png-download.png"
                : image
            }
            alt="profile"
            className="w-1/4 "
          />
          <label htmlFor="images">
            Upload<span className="text-red-500 text-xl">*</span>:
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            type="file"
            id="images"
            accept="image/*"
            onChange={imageHandler}
          />
        </div>
      </div>
      {errors.images?.message && (
        <p style={{ color: "red" }}>{errors.images?.message}</p>
      )}
    </div>
  );
};

export default Profile;
