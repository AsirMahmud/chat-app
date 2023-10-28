import React from "react";
import HomePage from "./component/HomePage";
import ChatBox from "./component/ChatBox";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/ChatBox"
          element={
            <PrivateRoutes>
              <ChatBox></ChatBox>
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
