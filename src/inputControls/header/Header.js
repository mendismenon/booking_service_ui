import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modal/Modal";
import SignIn from "../../layouts/SignIn/SignIn";
import {
  generateOtpActn,
  initiateOtpActn,
} from "../../redux/actions/AuthenticationActn";
import { urlPaths } from "../../routes/urls";
import "./Header.scss";

function Header(props) {
  const [showText, setShowText] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const authResponse = useSelector((state) => state?.AuthReducer?.authObj);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigation = {};
  const urls = {};

  const ref = useRef("");

  const [toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!toggle);
    ref.current.classList.toggle("active");
  };

  const getAppFn = () => {};

  const showSignIn = () => {
    dispatch(initiateOtpActn());
    setShowSignInModal(true);
  };

  const SetMyaccToggle = () => {
    let lobj = {};
    lobj.clicked = true;

    setShowText(!showText);
  };

  const HandleDanshBoard = () => {};

  const [logoutClicked, setLogoutClicked] = useState(false);

  const [loading, setloading] = useState(false);

  const HandleLogout = () => {
    SetMyaccToggle();    
    dispatch(initiateOtpActn());
  };

  const HandleWhatsapp = () => {
    props.whatsappStatus(!props.whatsapp);
    props.updateWhatsapp(!props.whatsapp === true ? 1 : 0);
  };

  return (
    <>
      {/* for web view */}
      {false ? (
        <Loader FullScreen={true} />
      ) : (
        <div className="HomeheaderCls">
          <div className="headWeb">
            <nav className="navbar mscrollShadow">
              <div className="homeWrapperComponents d-flex">
                <a href="/" className="logo">
                  <img
                    src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654180557/Booking_System/slide1_yjkiyb.png"
                    alt="_logo"
                    className="onsuimg"
                  />
                </a>
                <ul className="main-nav" id="js-menu">
                  <li className="liLink">
                    <span
                      onClick={() => props.history.push()}
                      style={{ cursor: "pointer" }}
                      className={`nav-links ${
                        props.nav_selected == navigation.HOME && "selectedNav"
                      }`}
                      id="navv"
                    >
                      Home
                    </span>
                    <a
                      title="Affordable "
                      href="https://www.google.com/"
                      alt="Home"
                      style={{ fontSize: "0px" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="liLink">
                    <span
                      onClick={() => props.history.push(urls.ABOUT_US)}
                      style={{ cursor: "pointer" }}
                      className={`nav-links ${
                        props.nav_selected == navigation.ABOUT && "selectedNav"
                      }`}
                      id="navv"
                    >
                      About Us
                    </span>
                    <a
                      title="Watery - Best Employee Healthcare Platform "
                      href="https://www.google.com/teamsure/about-us"
                      alt="About Us"
                      style={{ fontSize: "0px" }}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="liLink">
                    <span
                      onClick={() => props.history.push(urls.CONTACT_US)}
                      style={{ cursor: "pointer" }}
                      className={`nav-links ${
                        props.nav_selected == navigation.CONTACT &&
                        "selectedNav"
                      }`}
                      id="navv"
                    >
                      Contact Us
                    </span>
                    <a
                      title=" – Contact Us for Customer Support and Partnerships"
                      href="https://www.google.com/teamsure/contact-us"
                      alt="Contact Us"
                      style={{ fontSize: "0px" }}
                    >
                      Contact Us
                    </a>
                  </li>
                  {/* <li className="liLink">
                        <a href={urls.BLOG_DESC} className={`nav-links ${props.nav_selected==navigation.BLOG && "selectedNav"}`}  id="navv">Blog</a>
                    </li>
                    <li className="liLink">
                        <a href={urls.FAQ} className={`nav-links ${props.nav_selected==navigation.FAQ && "selectedNav"}`} id="navv">FAQs</a>
                    </li> */}
                  {localStorage.getItem("LG") != 1 && (
                    <li className="getappflex liLink">
                      <button
                        id="getapp"
                        onClick={() => navigate(urlPaths.BOOKING)}
                        className="nav-links"
                      >
                        Book Now
                      </button>
                    </li>
                  )}

                  <li className="myaccountflex liLink">
                    {authResponse?.auth == true ? (
                      <button
                        id="login-link"
                        onClick={() => SetMyaccToggle()}
                        className="ml-0 nav-links"
                      >
                        My Account
                      </button>
                    ) : (
                      <button
                        id="myaccount"
                        className="nav-links ml-0"
                        onClick={() => {
                          showSignIn();
                        }}
                      >
                        Login
                      </button>
                    )}
                  </li>

                  {showText && (
                    <div className="acount-details-div">
                      <div className="wrp-account-sec">
                        <div className="acchol-name">
                          Hello{props?.name ?? " Guest"}
                        </div>
                        <div className="achol-numnber">
                          {authResponse?.email}
                        </div>

                        <div className="account-sec-hr"></div>
                        <div
                          className="logout-sec mb-3"
                          onClick={() => HandleLogout()}
                        >
                          Logout
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
              <Modal
                show={showSignInModal}
                onClose={() => {
                  setShowSignInModal(false);
                }}
              >
                <SignIn
                  onClose={() => {
                    setShowSignInModal(false);
                  }}
                />
              </Modal>
            </nav>
          </div>

          {/* for mobile view */}
          <div className="headMob">
            <nav className="navbar">
              <span
                className="navbar-toggle"
                id="js-navbar-toggle"
                onClick={() => HandleToggle()}
              >
                {toggle ? (
                  <img
                    src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654177323/Booking_System/slid_essbyh.webp"
                    alt="toggle"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654177261/Booking_System/fa_bars_x9slls_vnmh1z.svg"
                    alt="toggle"
                  />
                )}
              </span>
              <a href={urls.HOME} className="logo">
                <img
                  alt="logo"
                  src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654180557/Booking_System/slide1_yjkiyb.png"
                  onClick={() => props.setNavSelected(navigation.HOME)}
                  className="onsuimg"
                />
              </a>
              <ul ref={ref} className="main-navigation" id="js-menu">
                <li className="liLink">
                  <span
                    onClick={() => {
                      navigate(urlPaths.HOME);
                      HandleToggle();
                    }}
                    id="navv"
                    className={`nav-links ${
                      props.nav_selected == navigation.HOME && "selectedNav"
                    }`}
                  >
                    Home
                  </span>
                  <a
                    title="Affordable Employee Healthcare with group medical insurance"
                    href="https://www.google.com/"
                    alt="Home"
                    style={{ fontSize: "0px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="liLink">
                  <span
                    onClick={() => {
                      props.history.push(urls.ABOUT_US);
                      HandleToggle();
                    }}
                    id="navv"
                    className={`nav-links ${
                      props.nav_selected == navigation.ABOUT && "selectedNav"
                    }`}
                  >
                    About Us
                  </span>
                  <a
                    title="Watery - Best Employee Healthcare Platform "
                    href="https://www.google.com/teamsure/about-us"
                    alt="About Us"
                    style={{ fontSize: "0px" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="liLink">
                  <span
                    onClick={() => {
                      props.history.push(urls.CONTACT_US);
                      HandleToggle();
                    }}
                    id="navv"
                    className={`nav-links ${
                      props.nav_selected == navigation.CONTACT && "selectedNav"
                    }`}
                  >
                    Contact Us
                  </span>
                  <a
                    title="Watery – Contact Us for Customer Support and Partnerships"
                    href="https://www.google.com/teamsure/contact-us"
                    alt="Contact Us"
                    style={{ fontSize: "0px" }}
                  >
                    Contact Us
                  </a>
                </li>

                {/* <li className="liLink">
            <a href={urls.BLOG_DESC} className="nav-links" id="navv" className={`nav-links ${props.nav_selected==navigation.BLOG && "selectedNav"}`} >Blog</a>
        </li>
        <li className="liLink">
            <a href={urls.FAQ} className="nav-links" id="navv" className={`nav-links ${props.nav_selected==navigation.FAQ && "selectedNav"}`}>FAQs</a>
        </li> */}
                {localStorage.getItem("LG") != 1 && (
                  <li className="getappflex liLink">
                    <button
                      id="getapp"
                      onClick={() => {
                        getAppFn();
                        HandleToggle();
                      }}
                      className="nav-links"
                    >
                      Book Now
                    </button>
                  </li>
                )}
                <li className="myaccountflex liLink">
                  {authResponse?.auth == true ? (
                    <button
                      id="login-link"
                      onClick={() => {
                        HandleLogout();
                        HandleToggle();
                      }}
                      className="ml-0 nav-links"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      id="myaccount"
                      className="nav-links ml-0"
                      onClick={() => {
                        showSignIn();
                        //navigate(urlPaths.SIGN_IN)
                      }}
                    >
                      Login
                    </button>
                  )}
                </li>

                <li className="liLink">
                  <div
                    className="logout-sec mb-3"
                    style={{
                      display: "flex",
                      width: "fit-content",
                      margin: "auto",
                    }}
                  >
                    <div>
                      {/* <CheckBox onClick={()=>HandleWhatsapp()} checked={props.whatsapp}/> */}
                    </div>
                  </div>
                </li>
              </ul>

              <Modal
                show={showSignInModal}
                onClose={() => {
                  setShowSignInModal(false);
                }}
              >
                <SignIn
                  onClose={() => {
                    setShowSignInModal(false);
                  }}
                />
              </Modal>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
