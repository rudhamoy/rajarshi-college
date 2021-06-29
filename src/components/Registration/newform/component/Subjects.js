import React from "react";

const Subjects = ({ register, errors }) => {
  return (
    <div>
      {/** Upper case */}
      <div className="bg-white w-96  p-4 mb-4">
        <h2 className="text-left font-bold">Subjets</h2>
        <p>Programme- Which Subject seeking Honours/BA Pass/ Bsc Pass:</p>

        {/** Preference Choice 1 */}
        {errors.preference1?.message && (
          <p style={{ color: "red" }}>{errors.preference1?.message}</p>
        )}
        <div className="w-full flex items-center mb-3">
          <label htmlFor="preference1" className="w-2/4 text-left">
            Preference Choice 1 <span className="text-red-500 text-xl">*</span>:
          </label>
          <select
            className="bg-gray-100 py-3 w-2/4 p-2 rounded mt-1"
            id="preference1"
            {...register("preference1", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="select">Select</option>
            <option value="eduhons">Education(Hons)</option>
            <option value="enghons">English(Hons)</option>
            <option value="philohons">Philoshophy(Hons)</option>
            <option value="historyhons">History(Hons)</option>
            <option value="polhons">Political(Hons)</option>
            <option value="physicshons">Physics(Hons)</option>
            <option value="chemhons">Chemsitry(Hons)</option>
            <option value="mathshons">Mathematics(Hons)</option>
            <option value="bapass">BA Pass</option>
            <option value="bscpass">BSc Pass</option>
          </select>
        </div>

        {/** Preference Choice 2 */}
        {errors.preference2?.message && (
          <p style={{ color: "red" }}>{errors.preference2?.message}</p>
        )}
        <div className="w-full flex items-center mb-3">
          <label htmlFor="preference2" className="w-2/4 text-left">
            Preference Choice 2 <span className="text-red-500 text-xl">*</span>:
          </label>
          <select
            className="bg-gray-100 py-3 w-2/4 p-2 rounded mt-1"
            id="preference2"
            {...register("preference2", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="select">Select</option>
            <option value="eduhons">Education(Hons)</option>
            <option value="enghons">English(Hons)</option>
            <option value="philohons">Philoshophy(Hons)</option>
            <option value="historyhons">History(Hons)</option>
            <option value="polhons">Political(Hons)</option>
            <option value="physicshons">Physics(Hons)</option>
            <option value="chemhons">Chemsitry(Hons)</option>
            <option value="mathshons">Mathematics(Hons)</option>
            <option value="bapass">BA Pass</option>
            <option value="bscpass">BSc Pass</option>
          </select>
        </div>

        {/** Preference Choice 3 */}
        {errors.preference3?.message && (
          <p style={{ color: "red" }}>{errors.preference3?.message}</p>
        )}
        <div className="w-full flex items-center mb-3">
          <label htmlFor="preference3" className="w-2/4 text-left">
            Preference Choice 3 <span className="text-red-500 text-xl">*</span>:
          </label>
          <select
            className="bg-gray-100 py-3 w-2/4 p-2 rounded mt-1"
            id="preference3"
            {...register("preference3", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="select">Select</option>
            <option value="eduhons">Education(Hons)</option>
            <option value="enghons">English(Hons)</option>
            <option value="philohons">Philoshophy(Hons)</option>
            <option value="historyhons">History(Hons)</option>
            <option value="polhons">Political(Hons)</option>
            <option value="physicshons">Physics(Hons)</option>
            <option value="chemhons">Chemsitry(Hons)</option>
            <option value="mathshons">Mathematics(Hons)</option>
            <option value="bapass">BA Pass</option>
            <option value="bscpass">BSc Pass</option>
          </select>
        </div>
      </div>

      {/** Lower Case */}
      <div className="bg-white w-96  p-4">
        <h2 className="text-left font-bold">Subjets</h2>
        <p> Elective Course to be taken:</p>
        {/** elective choice 1 */}
        {errors.elective1?.message && (
          <p style={{ color: "red" }}>{errors.elective1?.message}</p>
        )}
        <div className="w-full flex items-center mb-3">
          <label htmlFor="elective1" className="w-2/4 text-left">
            Elective Choice 1 <span className="text-red-500 text-xl">*</span>:
          </label>
          <select
            className="bg-gray-100 py-3 w-2/4 p-2 rounded mt-1"
            id="elective1"
            {...register("elective1", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="select">Select</option>
            <option value="edu">Education</option>
            <option value="eng">English</option>
            <option value="philo">Philoshophy</option>
            <option value="history">History</option>
            <option value="pol">Political</option>
            <option value="physics">Physics</option>
            <option value="chem">Chemsitry</option>
            <option value="maths">Mathematics</option>
            <option value="bapass">BA Pass</option>
            <option value="bscpass">BSc Pass</option>
          </select>
        </div>

        {/** elective choice 2 */}
        {errors.elective2?.message && (
          <p style={{ color: "red" }}>{errors.elective2?.message}</p>
        )}
        <div className="w-full flex items-center mb-3">
          <label htmlFor="elective2" className="w-2/4 text-left">
            Elective Choice 2 <span className="text-red-500 text-xl">*</span>:
          </label>
          <select
            className="bg-gray-100 py-3 w-2/4 p-2 rounded mt-1"
            id="elective2"
            {...register("elective2", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="select">Select</option>
            <option value="edu">Education</option>
            <option value="eng">English</option>
            <option value="philo">Philoshophy</option>
            <option value="history">History</option>
            <option value="pol">Political</option>
            <option value="physics">Physics</option>
            <option value="chem">Chemsitry</option>
            <option value="maths">Mathematics</option>
            <option value="bapass">BA Pass</option>
            <option value="bscpass">BSc Pass</option>
          </select>
        </div>

        {/** elective choice 3 */}
        {errors.elective3?.message && (
          <p style={{ color: "red" }}>{errors.elective3?.message}</p>
        )}
        <div className="w-full flex items-center mb-3">
          <label htmlFor="elective3" className="w-2/4 text-left">
            Elective Choice 3 <span className="text-red-500 text-xl">*</span>:
          </label>
          <select
            className="bg-gray-100 py-3 w-2/4 p-2 rounded mt-1"
            id="elective3"
            {...register("elective3", {
              required: {
                value: true,
                message: "Please enter ur name",
              },
            })}
          >
            <option value="select">Select</option>
            <option value="edu">Education</option>
            <option value="eng">English</option>
            <option value="philo">Philoshophy</option>
            <option value="history">History</option>
            <option value="pol">Political</option>
            <option value="physics">Physics</option>
            <option value="chem">Chemsitry</option>
            <option value="maths">Mathematics</option>
            <option value="bapass">BA Pass</option>
            <option value="bscpass">BSc Pass</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
