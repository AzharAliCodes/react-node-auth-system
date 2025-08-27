import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await api.get("/home");
        setMessage(res.data.message);
      } catch (err) {
        alert("Unauthorized, please login again");
        navigate("/signin");
      }
    };
    fetchHome();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Welcome to Home
      </h1>

      <h2 className="text-xl font-medium text-white drop-shadow">{message}</h2>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
