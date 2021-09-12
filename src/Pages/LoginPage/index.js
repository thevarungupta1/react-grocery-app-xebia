import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const LoginPage = () => {
  const history = useHistory();
  const [{ emailError, passwordError, hasError }, setErrorMessage] = useState("");
  const [response, setResponse] = useState("");
  const [{ email, password }, setUser] = useState({});

  const onEmailChangeHandler = (event) => {
    setUser({
      email: event.target.value,
      password: password,
    });
  };
  const onPasswordChangeHandler = (event) => {
    setUser({
      email: email,
      password: event.target.value,
    });
  };

  const validate = () => {
    if (email == undefined) {
      return false;
    }
    if (password == undefined) {
      return false;
    }
    return true;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(validate()){
      axios
      .post("http://apolis-grocery.herokuapp.com/api/auth/login", {
        email,
        password,
      })
      .then((response) => {        
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setResponse("user register successfully");
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
        setResponse("Oops! something went wrong");
      });
    }else{
      setErrorMessage({
        emailError: 'Email is required',
        passwordError: 'Password is required',
        hasError: true
      })
    }
    
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <div class="alert alert-success" role="alert">
              {response}
            </div>
            <h1>Login</h1>
            <hr />          
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={onEmailChangeHandler}
                  className="form-control"
                />
                <small className="text-danger">{ emailError }</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={onPasswordChangeHandler}
                  className="form-control"
                />
                <small className="text-danger">{ passwordError }</small>
              </div>
              <br />
              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
