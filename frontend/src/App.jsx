import {BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route 
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        />
      </Routes>
    </Router>
  )
}

export default App
