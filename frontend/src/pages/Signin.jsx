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
    <div>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email' onChange={handleChange} required/>
        <input type="password" name='password' placeholder='Password' onChange={handleChange} required/>
        <button type='submit'>Signin</button>
      </form>
    </div>
  )
}

export default Signin
