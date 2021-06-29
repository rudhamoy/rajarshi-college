import React from "react";

const BoardAppear = ({ register, errors }) => {
  return (
    <div>
      <div className="bg-white w-full  max-w-md p-4 mb-3">
        <h2>
          Have you been consider to have appeared for XII Board Examination in
          2021? <span className="text-red-500 text-xl">*</span>
        </h2>
        <div className="flex  mt-1 text-right">
          <div>
            <input
              type="radio"
              id="board12"
              {...register("board12", {
                required: {
                  value: true,
                  message: "Please Fill in this field",
                },
              })}
              value="no"
            />
            <label htmlFor="borad12">No</label>
          </div>
          <br />
          <div className="ml-4">
            <input
              type="radio"
              id="board12"
              {...register("board12", {
                required: {
                  value: true,
                  message: "Please Fill in this field",
                },
              })}
              value="yes"
            />
            <label htmlFor="board12">Yes</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAppear;
