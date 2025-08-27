const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')

const app = express();
connectDB();

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5174", // frontend port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use('/api/auth',authRoutes)
const PORT = 5173; 
app.listen(PORT, () => console.log(`server running on port ${PORT}`));




