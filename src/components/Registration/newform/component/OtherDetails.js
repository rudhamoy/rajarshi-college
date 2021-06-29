import React from "react";

const OtherDetails = ({ register, errors }) => {
  return (
    <div>
      {/** PG */}
      <div className="bg-white w-96  p-4">
        <h2 className="text-left font-bold">Other Details</h2>
        {/** PG */}
        <div className="flex items-center">
          <label htmlFor="payingguest" className="w-3/4 text-left">
            Do you need paying guest facility through private agency?:
          </label>
          <select
            className="bg-gray-100 py-3 w-1/4 p-2 rounded mt-1"
            id="payingguest"
            {...register("payingguest", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>

      <div className="bg-white w-96  p-4 mt-3">
        {/** PG */}
        <div className="flex items-center">
          <label htmlFor="transport" className="w-3/4 text-left">
            Do you require transport facility for attending college?:
          </label>
          <select
            className="bg-gray-100 py-3 w-1/4 p-2 rounded mt-1"
            id="transport"
            {...register("transport", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>

      <div className="bg-white w-96  p-4 mt-3">
        {/** PG */}
        <div className="flex items-center">
          <label htmlFor="anyotheruni" className="w-3/4 text-left">
            Are you pursuing any regular course from any University? :
          </label>
          <select
            className="bg-gray-100 py-3 w-1/4 p-2 rounded mt-1"
            id="anyotheruni"
            {...register("anyotheruni", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>

      {/** College Agree */}
      <div className="bg-white w-96  p-4 mt-3">
        <div className="text-left">
          <div className="flex">
            <div>
              <input
                type="radio"
                id="agreecollege"
                {...register("agreecollege")}
                value="yes"
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <br />
            <div>
              <input
                type="radio"
                id="agreecollege"
                {...register("agreecollege")}
                value="no"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <p>
            I do hereby declare that, i have read and understood the contens and
            agree to the terms stated in the General Instructions given in the
            college website and filled up this online admission form in
            accordance with the general instructions and prospectus provided on
            the college webiste. I also hereby declare that the information
            given above is true and complete to the best of my knowledge and
            belief, and if any information in it is found to be incorrect, my
            admission shall be liable to such desciplinary action as may be
            decide by college. During the entire peroisd of course curriculum ,
            I shall not be involved in ragging or in any kind of misconduct.
          </p>
          {errors.gender?.message && (
            <p style={{ color: "red" }}>{errors.gender?.message}</p>
          )}
        </div>
      </div>

      {/** Pay Agree */}
      <div className="bg-white w-96  p-4 mt-3">
        <div className="text-left">
          <div className="flex">
            <div>
              <input
                type="radio"
                id="agreepay"
                {...register("agreepay")}
                value="yes"
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <br />
            <div>
              <input
                type="radio"
                id="agreepay"
                {...register("agreepay")}
                value="no"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <p>
            I do hereby declare that, i have read and understood the fee
            structure mentioned in the prospectus of the college, instructions
            of payment as mentioned under Fee structure and also in the
            instructions as mentioned in General Instructions. I do agree to pay
            all the amount of fees by the date specified by the Rajarshi College
            of Eduction & Skill and as it will be notified from time to time.
          </p>
          {errors.gender?.message && (
            <p style={{ color: "red" }}>{errors.gender?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
