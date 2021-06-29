import React from "react";

const Results = ({ register, errors }) => {
  return (
    <div>
      <p>(Fill only if you have appeared 12th board examination)</p>
      {/** 1st */}
      <div className="bg-white w-96 p-4">
        <h2 className="text-left font-bold">Results</h2>
        {/** result 1 */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="w-full">
            <label htmlFor="result1">
              1. Subject <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Subject"
              type="text"
              {...register("result1")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="fullmarks1">
              Fullmarks <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Fullmarks"
              type="number"
              {...register("fullmarks1")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="markObtained1">
              Mark Obtained <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Marks"
              type="number"
              {...register("markObtain1")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="grade1">
              Grade <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Grade"
              type="text"
              {...register("grade1")}
            />
          </div>
        </div>
      </div>

      {/** 2nd */}
      <div className="bg-white w-96  p-4 mt-3">
        {/** result 2 */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="w-full">
            <label htmlFor="results2">
              2. Subject <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Subject"
              type="text"
              {...register("result2")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="fullmarks2">
              Fullmarks <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Fullmarks"
              type="number"
              {...register("fullmarks2")}
            />
          </div>

          <div className="w-full">
            <label htmlFor="markObtained2">
              Mark Obtained <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Marks"
              type="number"
              {...register("markObtain2")}
            />
          </div>

          <div className="w-full">
            <label htmlFor="garde2">
              Grade <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Grade"
              type="text"
              {...register("grade2")}
            />
          </div>
        </div>
      </div>

      {/** 3rd */}
      <div className="bg-white w-96  p-4 mt-3">
        {/** result 3 */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="w-full">
            <label htmlFor="result3">
              3. Subject <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Subject"
              type="text"
              {...register("result3")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="fullmarks3">
              Fullmarks <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Fullmarks"
              type="number"
              {...register("fullmarks3")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="markObtained3">
              Mark Obtained <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Marks"
              type="number"
              {...register("markObtain3")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="grade3">
              Grade <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Grade"
              type="text"
              {...register("grade3")}
            />
          </div>
        </div>
      </div>

      {/** 4th */}
      <div className="bg-white w-96  p-4 mt-3">
        {/** result 4 */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="w-full">
            <label htmlFor="result4">
              4. Subject <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Subject"
              type="text"
              {...register("result4")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="fullmarks4">
              Fullmarks <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Fullmarks"
              type="number"
              {...register("fullmarks4")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="markObtained4">
              Mark Obtained <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Marks"
              type="number"
              {...register("markObtain4")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="grade4">
              Grade <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Grade"
              type="text"
              {...register("grade4")}
            />
          </div>
        </div>
      </div>

      {/** 5th */}
      <div className="bg-white w-96  p-4 mt-3">
        {/** result 5 */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="w-full">
            <label htmlFor="result5">
              5. Subject <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Subject"
              type="text"
              {...register("result5")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="fullmarks5">
              Fullmarks <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Fullmarks"
              type="number"
              {...register("fullmarks5")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="markObtained5">
              Mark Obtained <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Marks"
              type="number"
              {...register("markObtain5")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="grade5">
              Grade <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Grade"
              type="text"
              {...register("grade5")}
            />
          </div>
        </div>
      </div>

      {/** 6th */}
      <div className="bg-white w-96  p-4 mt-3">
        {/** result 6 */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="w-full">
            <label htmlFor="result6">
              6. Subject <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Subject"
              type="text"
              {...register("result6")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="fullmarks6">
              Fullmarks <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Fullmarks"
              type="number"
              {...register("fullmarks6")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="markObtained6">
              Mark Obtained <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Marks"
              type="number"
              {...register("markObtain6")}
            />
          </div>
          <div className="w-full">
            <label htmlFor="grade6">
              Grade <span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              placeholder="Grade"
              type="text"
              {...register("grade6")}
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-96  p-4 mt-3">
        <div className="flex items-center">
          <label htmlFor="percentage" className="w-3/4 text-left">
            Total Percentage of Marks Obtained{" "}
            <span className="text-red-500 text-xl">*</span>:
          </label>
          <input
            className="bg-gray-100 py-3 w-1/4 p-2 rounded mt-1"
            placeholder="Percentage"
            type="number"
            {...register("percentage")}
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
