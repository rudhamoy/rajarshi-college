import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Personal from "../component/Personal";
import Family from "../component/Family";
import Contact from "../component/Contact";
import Subjects from "../component/Subjects";
import Profile from "../component/Profile";
import Results from "../component/Results";
import OtherDetails from "../component/OtherDetails";
import Upload from "../component/Upload";
import Axios from "axios";
import { server } from "../../../../server";
import { db, storage } from "../../../../firebase";
import BoardAppear from "../component/BoardAppear";
import axios from "axios";

const MainForm = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(500);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [profilepic, setProfilepic] = useState();
  const [aadhaarpic, setAadhaarpic] = useState();
  const [marksheetpic, setMarksheetpic] = useState();
  const [helpdesk, setHelpdesk] = useState(false);
  const [specify, setSpecify] = useState("");

  // const token = "167458219766dbab06e29a297349ceb8799cbaf6";

  //Main form here
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const completeStep = (e) => {
    setStep((cur) => cur + 1);
  };

  const backHandler = (e) => {
    setStep((cur) => cur - 1);
  };

  // this function will handel payment when user submit his/her money
  // and it will confim if payment is successfull or not
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: `${server}/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `Token ${token}`,
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          const { message } = res.data;
          setMessage(message);
          setName("");
          amount();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    // we will pass the amount and product name to the backend using form data
    bodyData.append("amount", amount.toString());
    bodyData.append("name", name);

    const data = await Axios({
      url: `${server}/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Token ${token}`,
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    var options = {
      key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
      key_secret: process.env.REACT_APP_SECRET_KEY,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test teansaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const onSubmit = async (data) => {
    // showRazorpay();
    db.collection("registration").add({
      data,
      specify,
      helpdesk,
      profile: profilepic,
      aadhaar: aadhaarpic,
      marksheet: marksheetpic,
    });

    let formField = {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      aadhaar: data.aadhaar,
      martial: data.martial,
      mobile: data.mobile,
      email: data.email,
      motherName: data.motherName,
      fatherName: data.fatherName,
      annualIncome: data.annualIncome,
      anyotheruni: data.anyotheruni,
      address: data.address,
      pincode: data.pincode,
      category: data.category,
      minority: data.minority,
      state: data.state,
      city: data.city,
      dob: data.dob,
      nationality: data.nationality,
      payingguest: data.payingguest,
      transport: data.transport,
      elective1: data.elective1,
      elective2: data.elective2,
      elective3: data.elective3,
      preference1: data.preference1,
      preference2: data.preference2,
      preference3: data.preference3,
      employment: data.employment,
      fullmarks1: data.fullmarks1,
      fullmarks2: data.fullmarks2,
      fullmarks3: data.fullmarks3,
      fullmarks4: data.fullmarks4,
      fullmarks5: data.fullmarks5,
      fullmarks6: data.fullmarks6,
      markObtain1: data.markObtain1,
      markObtain2: data.markObtain2,
      markObtain3: data.markObtain3,
      markObtain4: data.markObtain4,
      markObtain5: data.markObtain5,
      markObtain6: data.markObtain6,
      grade1: data.grade1,
      grade2: data.grade2,
      grade3: data.grade3,
      grade4: data.grade4,
      grade5: data.grade5,
      grade6: data.grade6,
      result1: data.result1,
      result2: data.result2,
      result3: data.result3,
      result4: data.result4,
      result5: data.result5,
      result6: data.result6,
      percentage: data.percentage,
      pwd: data.pwd,
      board12: data.board12,
      agreecollege: data.agreecollege,
      agreepay: data.agreepay,
      helpdesk: helpdesk,
      specify: specify,
      gender: data.gender,
      aadhaar_img: aadhaarpic,
      marksheet_img: marksheetpic,
      profile_img: profilepic,
    };

    // await axios({
    //   method: "post",
    //   url: "https://paymentraj.herokuapp.com/api/application/",
    //   data: formField,
    //   // headers: {
    //   //   Authorization: `Token ${token}`,
    //   // },
    // }).then((response) => {
    //   console.log(response);
    // });
    // .catch((error) => {
    //   console.log(error);
    // });
    console.log(data, helpdesk, specify);
    completeStep();
  };

  //Button
  const renderButton = () => {
    if (step === 0) {
      return (
        <button
          type="button"
          disabled={!isValid}
          onClick={completeStep}
          className="bg-blue-600 text-white p-2 px-5"
        >
          Next Step
        </button>
      );
    }
    if (step === 7) {
      return (
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-green-600 px-4 py-2 text-white"
        >
          Complete Registration
        </button>
      );
    }
    if (step < 7) {
      return (
        <div className="">
          <button
            type="button"
            onClick={backHandler}
            className="bg-red-500 text-white p-2 px-5 mx-2"
          >
            Back
          </button>
          <button
            type="button"
            disabled={!isValid}
            onClick={completeStep}
            className="bg-blue-600 text-white p-2 px-5 mx-2"
          >
            Next Step
          </button>
        </div>
      );
    }
  };

  return (
    <div className="bg-blue-50 py-3">
      <h1 className="text-blue-900 text-4xl font-bold my-3">
        Admission Form for Rajarshi College
      </h1>
      {step < 7 && (
        <div className="mx-6">
          <p>
            (Make sure to go throuh the Instructions accordingly. Or Read the
            Instruction <Link to="/instructions">HERE</Link>)
          </p>
          Fill out all the <span style={{ color: "red" }}>(*)</span> requirement
          field in order to proceed and submit the form.
        </div>
      )}

      <form>
        <div className="flex justify-center p-2">
          {step === 0 && (
            <Personal
              helpdesk={helpdesk}
              setHelpdesk={setHelpdesk}
              specify={specify}
              setSpecify={setSpecify}
              register={register}
              errors={errors}
            />
          )}
          {step === 1 && <Family register={register} errors={errors} />}
          {step === 2 && <Contact register={register} errors={errors} />}
          {step === 3 && <Subjects register={register} errors={errors} />}
          {step === 4 && <BoardAppear register={register} errors={errors} />}
          {step === 5 && <Results register={register} errors={errors} />}
          {step === 6 && <OtherDetails register={register} errors={errors} />}
          {step === 7 && (
            <Upload
              setProfilepic={setProfilepic}
              setAadhaarpic={setAadhaarpic}
              setMarksheetpic={setMarksheetpic}
            />
          )}
          {step === 8 && (
            <div>
              <h1 className="font-bold text-green-500">Congratulations!</h1>
              <h2>Your Admission Form has been successfully submitted!</h2>{" "}
              <p>One of our faculty member will reach you out soon</p>
            </div>
          )}
          {/* {step === 7 && (
            <div className="mx-60 bg-white p-8 text-left">
              <div>
                <h1 className="text-center">Payment page</h1>

                <div className="grid">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="bg-gray-100 mb-2"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid">
                  <label htmlFor="amount">Amount:</label>
                  <div>{amount} /-</div>
                </div>
              </div>
            </div>
          )} */}
        </div>
        {renderButton()}
      </form>
      {loading && <div>Loading...</div>}
      {message ? (
        <div className="border-2 mx-60 rounded bg-white p-6 shadow-md">
          <h2>{message}</h2>{" "}
          <p>You will be contact by one of our faculty member soon</p>
        </div>
      ) : null}
    </div>
  );
};

export default MainForm;
