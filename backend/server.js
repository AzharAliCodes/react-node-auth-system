const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const app = express();
connectDB();

app.use(express.json())
app.use('/api/auth',authRoutes)
const PORT = 5173; 
app.listen(PORT, () => console.log(`server running on port ${PORT}`));




