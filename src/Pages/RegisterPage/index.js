import React, { useState } from "react";
import axios from "axios";
import "./Styles.css";

const RegisterPage = () => {
  const [{ nameError, emailError }, setErrorMessage] = useState("");
  const [response, setResponse] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassowrd] = useState("");

  // const onChangeHandler = (event) => {
  //     // console.log(event.target.name)
  //     // console.log(event.target.value)
  // }

  const onFirstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const onMobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassowrd(event.target.value);
  };

  const validate = () => {
    if (firstName == "") {
      setErrorMessage({
        nameError: "Name is required",
      });
      return false;
    }
    return true;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (validate()) {
      let user = {
        firstName,
        email,
        mobile,
        password,
      };
      axios
        .post("http://apolis-grocery.herokuapp.com/api/auth/register", user)
        .then((response) => {
          console.warn(response.data);
          setResponse("user register successfully");
        })
        .catch((error) => {
          console.error(error);
          setResponse("Oops! something went wrong");
        });
    }
  };

  //   let showMessage;
  //   if (response == undefined) {
  //     showMessage = (
  //       <div class="alert alert-danger" role="alert">
  //         {response}
  //       </div>
  //     );
  //   } else {
  //     showMessage = (
  //       <div class="alert alert-success" role="alert">
  //         {response}
  //       </div>
  //     );
  //   }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <div class="alert alert-success" role="alert">
              {response}
            </div>
            <h1>Register</h1>
            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={onFirstNameChangeHandler}
                  className="form-control"
                />
                <small className="text-danger">{nameError}</small>
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={onEmailChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={onMobileChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={onPasswordChangeHandler}
                  className="form-control"
                />
              </div>
              <br />
              <input
                type="submit"
                value="Register"
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
export default RegisterPage;
