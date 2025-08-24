const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const app = express();
connectDB();

app.use(express.json)

const PORT = 5000; 
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
