import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import TopBar from "./components/header/TopBar";
import MainMenu from "./components/menu/MainMenu";
import FooterMain from "./components/footer/FooterMain";
import SubFooter from "./components/footer/SubFooter";
import ApplyNow from "./pages/ApplyNow";
import Instructions from "./pages/Instructions";
import DiscountFee from "./pages/DiscountFee";
import HelpDesk from "./pages/HelpDesk";
import NoticeDetail from "./components/announcement/notice/NoticeDetail";
import About from "./pages/About";
import Register from "./components/auth/Register";
import RegisterComplete from "./components/auth/RegisterComplete";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Login from "./pages/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import NewsEventDetail from "./components/announcement/newsEvent/NewsEventDetail";
import AllNewsEvent from "./pages/AllNewsEvent";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    // <Router>
    <div className="App">
      <TopBar />
      <MainMenu />
      <Switch>
        <Route path="/apply" exact>
          <ApplyNow />
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/instructions">
          <Instructions />
        </Route>
        <Route path="/discountfee">
          <DiscountFee />
        </Route>
        <Route path="/helpdesk">
          <HelpDesk />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact" component={ContactUs} />
        <Route path="/noticedetail/:id/" component={NoticeDetail} />
        <Route path="/newsevent/:id/" component={NewsEventDetail} />
        <Route path="/allnewsevent" component={AllNewsEvent} />
        <Route path="/register/complete" component={RegisterComplete} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgot/password" component={ForgotPassword} />
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <FooterMain />
      <SubFooter />
    </div>
    // </Router>
  );
};

export default App;
