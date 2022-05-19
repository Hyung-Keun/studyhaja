import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@pages/Auth/Login";
import OAuth from "@pages/Auth/OAuth";
import Profile from "@pages/Auth/Profile";
import NotFound from "@pages/Error/NotFound";
import GroupList from "@pages/GroupList";

import Frame from "./Frame";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {/* <Frame> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GroupList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
      {/* </Frame> */}
    </React.Fragment>
  );
};

export default App;
