// src/components/PrivateRouter.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRouter = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "https://aaryaanetwork-backend.onrender.com/api/admin/check-auth",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(res.data.authenticated);
      } catch (err) {
        toast.error("Authentication failed"+err.message);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRouter;
