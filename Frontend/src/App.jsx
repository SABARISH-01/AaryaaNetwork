import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebRouter from "./WebRouter";
import SmoothScroll from "./Components/Scroll/SmoothScroll.jsx";
import "./App.css";
import AdminApp from "./Admin/AdminApp.jsx";

function App() {
  return (
    <>
      <SmoothScroll>
        <Routes>
          <Route path="/*" element={<WebRouter />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </SmoothScroll>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
