import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from '../services/api';

function Signup() {
  const [formData, setFormData] = useState({name: "", email: "", password:""})
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.perventDefault();
    try{
        const res = await api.post("/signup", formData);
        alert(res.data.message)
        navigate("/signin")
    } catch (err) {
        alert(err.response?.data?.message  || "Signup failed")
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
