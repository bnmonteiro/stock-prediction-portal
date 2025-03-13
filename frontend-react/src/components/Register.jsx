import React, { useState } from "react";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const data = { username, email, password };
    console.log(data);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/register/",
        data
      );
      setErrors({});
      setSuccess(true);
      console.log("Resgistred Successfully");
      console.log("resData=> ", res.data);
    } catch (error) {
      setErrors(error.response.data);
      console.log("response error data ==> ", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-5 bg-light-dark rounded">
            <h3 className="text-light text-center mb-4">Register an Account</h3>
            <form onSubmit={HandleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <small className="text-danger">{errors.username}</small>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="text-danger">{errors.email}</small>
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="set password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small className="text-danger">{errors.password}</small>
              </div>
              {success && (
                <div className="alert alert-success">
                  Registration Successful
                </div>
              )}
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Please Wait...
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
