import React, { useEffect } from "react";
import MultiStepForm from "../components/Registration/MultiStepForm";
import MainForm from "../components/Registration/newform/container/mainForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ApplyNow = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user, history]);
  return (
    <div>
      <MainForm />
    </div>
  );
};

export default ApplyNow;
