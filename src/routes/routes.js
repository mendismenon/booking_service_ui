import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import NotFound from "../layouts/404/NotFound";
import Booking from "../layouts/Booking/Booking";
import Home from "../layouts/Home/Home";
import SignIn from "../layouts/SignIn/SignIn";
import { urlPaths } from "./urls";
const RouteComp = (props) => {
  return (
    <Routes>
      <Route path={urlPaths.SIGN_IN} element={<SignIn />} />
      <Route path={urlPaths.HOME} element={<Home />} />
      <Route path={urlPaths.BOOKING} element={<Booking />} />
      <Route exact path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default RouteComp;
