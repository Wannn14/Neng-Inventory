import React, { useState } from "react";
import Img1 from "../../assets/img/Logo neng.jpg";
import "./Login.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "Admin321") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="box-login col-10 row g-0 align-items-center border rounded-3">
          <div className="col-6">
            <img src={Img1} alt="loginimage" className="img-fluid" />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit} className="col-6 py-4 px-4">
            <h4 className="login-tittle text-center py-4 mb-4">
              Selamat Datang | Silahkan Login Terlebih Dahulu
            </h4>
            <div className="from-floating mb-4">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="from-floating mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                href="/dashboard"
                className="login-btn py-2 px-2"
              >
                LogIn
              </Button>
            </div>
            <div className="text-center">Not Registered ? SigUp</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
