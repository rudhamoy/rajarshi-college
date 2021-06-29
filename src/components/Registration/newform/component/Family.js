import React from "react";

const Family = ({ register, errors }) => {
  return (
    <div>
      <div className="bg-white w-full  max-w-md p-4">
        <div className="">
          <h2 className="text-left font-bold">Family Details</h2>

          {/** Father Name */}

          <div className="w-full text-left mb-3">
            <label htmlFor="fatherName">
              Father's Name <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Father's Name"
              type="text"
              {...register("fatherName", {
                required: {
                  value: true,
                  message: "Please fill this field",
                },
              })}
            />
            {errors.fatherName?.message && (
              <p style={{ color: "red" }}>{errors.fatherName?.message}</p>
            )}
          </div>

          {/** Mother Name */}

          <div className="w-full text-left mb-3">
            <label htmlFor="motherName">
              Mother's Name <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Mother Name"
              type="text"
              {...register("motherName", {
                required: {
                  value: true,
                  message: "Please enter your mother's name",
                },
              })}
            />
            {errors.motherName?.message && (
              <p style={{ color: "red" }}>{errors.motherName?.message}</p>
            )}
          </div>

          {/** PWD */}
          <>
            <div className="flex mb-3">
              <p>
                Whether person specially abled?(PWD){" "}
                <span className="text-red-500 text-xl">*</span>
              </p>

              <div className="flex justify-between mt-1 ">
                <div>
                  <input
                    type="radio"
                    id="yes"
                    {...register("pwd")}
                    value="yes"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <br />
                <div>
                  <input type="radio" id="no" {...register("pwd")} value="no" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            {errors.pwd?.message && (
              <p style={{ color: "red" }}>{errors.pwd?.message}</p>
            )}
          </>

          {/** Annual income */}
          <>
            <div className="w-full flex items-center mb-3">
              <label htmlFor="annualIncome" className="w-2/4 text-left">
                Annual Income <span className="text-red-500 text-xl">*</span>:
              </label>
              <select
                className="bg-gray-100 py-3 w-3/4 p-2 rounded mt-1"
                id="annualIncome"
                {...register("annualIncome", {
                  required: {
                    value: true,
                    message: "Please enter ur name",
                  },
                })}
              >
                <option value="below3">Below 3 Lac</option>
                <option value="Above3">Above 3 Lac</option>
                <option value="below10">Below 10 Lac</option>
                <option value="above10">Above 10 Lac</option>
              </select>
            </div>
            {errors.annualIncome?.message && (
              <p style={{ color: "red" }}>{errors.annualIncome?.message}</p>
            )}
          </>

          {/** Minority */}
          <>
            <div className="w-full flex items-center mb-3">
              <label htmlFor="minority" className="w-2/4 text-left">
                Minority Group (y/n){" "}
                <span className="text-red-500 text-xl">*</span>:
              </label>
              <select
                className="bg-gray-100 py-3 w-3/4 p-2 rounded mt-1"
                id="minority"
                {...register("minority", {
                  required: {
                    value: true,
                    message: "Please enter ur name",
                  },
                })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {errors.minority?.message && (
              <p style={{ color: "red" }}>{errors.minority?.message}</p>
            )}
          </>

          {/** Martial Status */}
          <>
            <div className="w-full flex items-center mb-3">
              <label htmlFor="martial" className="w-2/4 text-left">
                Martial Status <span className="text-red-500 text-xl">*</span>:
              </label>
              <select
                className="bg-gray-100 py-3 w-3/4 p-2 rounded mt-1"
                id="martial"
                {...register("martial", {
                  required: {
                    value: true,
                    message: "Please enter ur name",
                  },
                })}
              >
                <option value="unmarried">Unmarried</option>
                <option value="married">Married</option>
              </select>
            </div>
            {errors.martial?.message && (
              <p style={{ color: "red" }}>{errors.martial?.message}</p>
            )}
          </>

          {/** Employment */}
          <>
            <div className="w-full flex items-center mb-3">
              <label htmlFor="employment" className="w-2/4 text-left">
                Employment Status{" "}
                <span className="text-red-500 text-xl">*</span>:
              </label>
              <select
                className="bg-gray-100 py-3 w-3/4 p-2 rounded mt-1"
                id="employment"
                {...register("employment", {
                  required: {
                    value: true,
                    message: "Please enter ur name",
                  },
                })}
              >
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
            {errors.employment?.message && (
              <p style={{ color: "red" }}>{errors.employment?.message}</p>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Family;
