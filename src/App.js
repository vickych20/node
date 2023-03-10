import React from "react";
import {
  
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
       
        <Routes>
            {/* <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} /> */}
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
