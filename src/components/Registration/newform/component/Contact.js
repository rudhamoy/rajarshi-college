import React from "react";

const Contact = ({ register, errors }) => {
  return (
    <div>
      <div className="bg-white w-96  p-4">
        <h2 className="text-left font-bold">Contact Info</h2>

        {/** Address */}
        <div className="w-full text-left mb-3">
          <label htmlFor="address">
            Address<span className="text-red-500 text-xl">*</span>:
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="Address"
            type="text"
            {...register("address", {
              required: {
                value: true,
                message: "Please fill this field",
              },
            })}
          />
          {errors.address?.message && (
            <p style={{ color: "red" }}>{errors.address?.message}</p>
          )}
        </div>

        {/** State */}
        <div className="w-full text-left mb-3">
          <label htmlFor="state">
            State<span className="text-red-500 text-xl">*</span>:
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="state"
            type="text"
            {...register("state", {
              required: {
                value: true,
                message: "Please fill this field",
              },
            })}
          />
          {errors.state?.message && (
            <p style={{ color: "red" }}>{errors.state?.message}</p>
          )}
        </div>

        {/** city */}
        <div className="w-full text-left mb-3">
          <label htmlFor="city">City</label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="city"
            type="text"
            {...register("city", {
              required: {
                value: true,
                message: "Please fill this field",
              },
            })}
          />
          {(<errors className="city"></errors>)?.message && (
            <p style={{ color: "red" }}>{errors.city?.message}</p>
          )}
        </div>

        {/** pincode */}
        <div className="w-full text-left mb-3">
          <label htmlFor="pincode">
            Pincode <span className="text-red-500 text-xl">*</span>:
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="pincode"
            type="number"
            {...register("pincode", {
              required: {
                value: true,
                message: "Please fill this field",
              },
            })}
          />
          {errors.pincode?.message && (
            <p style={{ color: "red" }}>{errors.pincode?.message}</p>
          )}
        </div>

        {/** mobile number */}
        <div className="w-full text-left mb-3">
          <label htmlFor="mobile">
            Mobile <span className="text-red-500 text-xl">*</span>:
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="mobile"
            type="number"
            {...register("mobile", {
              required: {
                value: true,
                message: "Please fill this field",
              },
            })}
          />
          {errors.mobile?.message && (
            <p style={{ color: "red" }}>{errors.mobile?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
