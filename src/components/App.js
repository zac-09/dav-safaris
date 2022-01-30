import React, { useEffect } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//===MUI IMPORTS===
import { Paper } from "@material-ui/core";

//===REDUX STORE IMPORTS===

//===COMPONENT IMPORTS===
import Home from "./HomePage/Home";
import BackToTop from "./BackToTop/BackToTop";
import AppBar from "./AppBar/AppBar";
import Theme from "./UI/Theme/Theme";
import "./App.css";
import Footer from "./Footer/Footer";
import LoginForm from "./Membership/LoginForm/LoginForm";
import RegisterForm from "./Membership/RegisterForm/RegisterForm";
import ResetPassword from "./Membership/PasswordReset/PasswordReset";
import ChangePassword from "./Membership/PasswordReset/ChangePassword";
import SingleTour from "./Tours/SingleTour/SingleTour";
import CountrySingle from "./CountryTours/CountrySingle";
import ChatNow from "./SendMessage/ChatNow/ChatNow";
import ContactUs from "./ContactUs/ContactUs";
import DashBoard from "./DashBoard/DashBoard";
import DashBoardItem from "./DashBoard/DashboardMenuItems/DashBoardItem";
import ManageTours from "./DashBoard/ManageTours/ManageTours";
import { AutoAuthenticate } from "../store/Actions/AuthActions";
import { fetchAllTours } from "../store/Actions/TourActions";
import Tours from "./Tours/AllTours/Tours";
import Category from "./CountryTours/Category/Category";
import Terms from "../containers/PrivacyPolicies/Terms";
import Policies from "../containers/PrivacyPolicies/Policies";
import Updates from "./SafariUpdates/Updates";
import NewsLetterForm from "./ContactUs/NewsLetterForm";
import ManageUpdates from "./DashBoard/ManageUpdates/ManageUpdates";
import { fetchAllPosts } from "../store/Actions/PostActions";
import Update from "./SafariUpdates/SingleUpdate/Update";

const App = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    AutoAuthenticate(dispatch);
    dispatch(fetchAllTours())
    dispatch(fetchAllPosts())
  }, [dispatch]);

  return (
    <Theme>
      <Router>
        <Paper elevation={0} square>
          <AppBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/dashboard/*"
              element={
                isAuthenticated ? <DashBoard /> : <Navigate to="/login" />
              }
            >
              <Route path="user" element={<DashBoardItem />} />
              <Route path="manage-tours" element={<ManageTours />} />
              <Route path="manage-safari-updates" element={<ManageUpdates />} />
            </Route>
            <Route
              path="/login"
              exact
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard/user" />
                ) : (
                  <LoginForm />
                )
              }
            />
            <Route path="/register" exact element={<RegisterForm />} />
            <Route path="/password-reset" exact element={<ResetPassword />} />
            <Route path="/change-password" exact element={<ChangePassword />} />
            <Route path="/contact-us" exact element={<ContactUs />} />
            <Route path="/terms-of-services" exact element={<Terms />} />
            <Route path="/privacy-policies" exact element={<Policies />} />
            <Route path="/tours" exact element={<Tours />} />
            <Route path="/safari-updates" exact element={<Updates isPostPage={true}/>} />
            <Route path="/safari-updates/:postTitle" exact element={<Update/>} />
            <Route
              path="/:countryName"
              exact
              element={<CountrySingle />}
            />
            <Route
              path="/:countryName/:tourCategory"
              exact
              element={<Category />}
            />
            <Route
              path="/tours/:tourTitle"
              exact
              element={<SingleTour />}
            />
          </Routes>
          <ChatNow />
          <BackToTop />
          <NewsLetterForm/>
          <Footer />
        </Paper>
      </Router>
    </Theme>
  );
};

export default App;
