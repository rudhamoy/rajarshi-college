import React, {useState} from "react";


const Personal = ({ register, errors, helpdesk, setHelpdesk, specify, setSpecify}) => {
  const [show, setShow] = useState();
  // const [helpdesk, setHelpdesk] = useState('')
  
 const selectHandler = (e) => {
   setHelpdesk(e.target.value)
   setShow(e.target.value)
  
}

console.log(helpdesk)
console.log(show)


  return (
    <div className="">
      <div className="bg-white w-full  max-w-md p-4 mb-3">
        <h2 className="text-left font-bold">Help Desk</h2>
        <label htmlFor="helpdesk">Select your Help Desk :</label>
        <select
          className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
          id="helpdesk"
          value={helpdesk}
          onChange={selectHandler}
          // {...register("helpdesk", {
          //   required: {
          //     value: true,
          //     message: "Please enter ur name",
          //   },
          // })}
        >
          <option value="select">select</option>
          <option value="amitroy">Amit Roy</option>
          <option value="sumanchdas">Suman Ch. Das</option>
          <option value="kausikbhowmik"> Kausik Bhowmik</option>
          <option value="amitdebnath">Amit Debnath</option>
          <option value="tarabanerjee"> Mrs. Tara Banerjee</option>
          <option value="gobindachakraborty"> Mr. Gobinda Chakraborty</option>
          <option value="parthabijoybed"> Mr. Partha Bijoy Bed</option>
          <option value="nepalrudrapal">Nepal Rudrapal</option>
          <option value="self">Self</option>
          <option value="college">College</option>
          <option value="others">Others</option>
        </select>
      </div>
      {/** Others Source */}
      {show === "others" ? (
        <div className="bg-white w-full  max-w-md p-4 mb-2">
          <h2 className="text-left font-bold">Specify</h2>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            type="text"
            value={specify}
            onChange={(e) => setSpecify(e.target.value)}
          />
        </div>
      ) : null}

      <div className="bg-white w-full  max-w-md p-4">
        <h2 className="text-left font-bold">Personal Details</h2>
        {/** Gender & firstname */}
        <div className="flex justify-between text-left mb-2">
          <div>
            <label htmlFor="gender">
              Gender <span className="text-red-500 text-xl">*</span>
            </label>

            <div className="flex justify-between mt-1">
              <div>
                <input
                  type="radio"
                  id="gender"
                  {...register("gender")}
                  value="male"
                />
                <label htmlFor="male">M</label>
              </div>
              <br />
              <div>
                <input
                  type="radio"
                  id="gender"
                  {...register("gender")}
                  value="female"
                />
                <label htmlFor="female">F</label>
              </div>
            </div>
            {errors.gender?.message && (
              <p style={{ color: "red" }}>{errors.gender?.message}</p>
            )}
          </div>
          {/** First Name */}
          <div className="w-3/5 mb-3">
            <label htmlFor="firstName">
              Firstname <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              required
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              type="text"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Please enter your first name",
                },
              })}
              placeholder="First Name"
            />
            {errors.firstName?.message && (
              <p style={{ color: "red" }}>{errors.firstName?.message}</p>
            )}
          </div>
        </div>

        {/** Middle Name */}

        <div className="w-full text-left mb-3">
          <label htmlFor="middleName">Middle Name</label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="Middle Name"
            type="text"
            {...register("middleName")}
          />
        </div>

        {/** Last Name */}

        <div className="w-full text-left mb-3">
          <label htmlFor="lastName">
            Last Name <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: {
                value: true,
                message: "Please enter your Last name",
              },
            })}
          />
          {errors.lastName?.message && (
            <p style={{ color: "red" }}>{errors.lastName?.message}</p>
          )}
        </div>

        {/** Email */}

        <div className="w-full text-left mb-3">
          <label htmlFor="email">
            Email <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter email",
              },
            })}
          />
          {errors.email?.message && (
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          )}
        </div>

        {/** DOB & nationality */}
        <div className="flex justify-between w-full text-left mb-3">
          <div className="w-2/5">
            <label htmlFor="dob">
              Date of Birth <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              type="date"
              id="dob"
              {...register("dob", {
                required: {
                  value: true,
                  message: "Please enter Date of birth",
                },
              })}
            />
            {errors.dob?.message && (
              <p style={{ color: "red" }}>{errors.dob?.message}</p>
            )}
          </div>
          <div className="w-2/5">
            <label htmlFor="Nationality">
              Nationality <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              type="text"
              id="nationality"
              {...register("nationality", {
                required: {
                  value: true,
                  message: "Please enter your nationality",
                },
              })}
            />
            {errors.nationality?.message && (
              <p style={{ color: "red" }}>{errors.nationality?.message}</p>
            )}
          </div>
        </div>

        {/** category & aadhaar */}
        <div className="flex justify-between w-full text-left mb-3">
          <div className="w-1/5">
            <label htmlFor="category">
              Category <span className="text-red-500 text-xl">*</span>:
            </label>
            <select
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              id="category"
              {...register("category", {
                required: {
                  value: true,
                  message: "Please Select",
                },
              })}
            >
              <option value="ur">UR</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="obc">OBC</option>
              <option value="others">Other</option>
            </select>
          </div>
          <div className="w-3/4">
            <label htmlFor="Nationality">
              Aadhaar number<span className="text-red-500 text-xl">*</span>:
            </label>
            <input
              className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
              type="number"
              id="aadhaar"
              {...register("aadhaar", {
                required: {
                  value: true,
                  message: "Please enter ur name",
                },
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
