import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api';

function Signin() {
    const [formData, setFormData] = useState({email: "",password: ""})
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.pareventDefault();
        try{
            const res = await api.post('/signin', formData)
            localStorage,setItem("token", res.data.token)
            alert(res.data.message)
            navigate('/home')
        } catch(err){
            alert(err.response?.data?.message || "Signin failed")
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signin
