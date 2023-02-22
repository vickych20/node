import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="pages ">
      <div className="login">
        <h1 className="hl">Login</h1>
        <div className="dark">
          <form action="POST">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              className="email"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="email"
            />
            <br />
            <input type="submit" onClick={submit} className="email submit" />
          </form>
          <div>
            <img
              src="https://media.istockphoto.com/id/938649404/vector/people-in-cafe.jpg?s=612x612&w=0&k=20&c=qo1bHQtaEJ-txWgyQ9JGO0_7Ix3GrXkACm3mjc6D3J0="
              alt=""
              className="img"
            />
          </div>
        </div>
        <br />
        <div className="or">
          <p>OR</p>
          <br />
          <Link to="/signup">signup page</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
