const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const app = express();
connectDB();

