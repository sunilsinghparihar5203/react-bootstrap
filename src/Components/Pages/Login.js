import React, { useState, useRef, useContext } from "react";
import { authContext } from "../Context";
import { useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const [isloginForm, setIsloginForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(authContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = emailRef.current.value;
    let url;
    setIsLoading(true);
    if (isloginForm) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwLzo_QZuf51mgNaePMbkwCZ3dGTMGi9Y";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwLzo_QZuf51mgNaePMbkwCZ3dGTMGi9Y";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data)
            let errorMessgae = " Authentication faild";
            throw new Error(errorMessgae);
          });
        }
      })
      .then((data) => {
        setIsLoading(false);
        console.log({ history: history });
        if (isloginForm) {
          authCtx.login(data.idToken);
          history.push("/");
        } else {
          alert("User registerd! Please Login now.");
          formHandler();
          emailRef.current.value = "";
          passRef.current.value = "";
        }

        console.log({ authCtx: authCtx });
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };
  console.log({ authCtx: authCtx });
  const formHandler = () => {
    if (isloginForm) {
      setIsloginForm(false);
    } else {
      setIsloginForm(true);
    }
  };

  return (
    <div className="container d-flex justify-content-center my-4" >
      <div className="col-md-4">
        <h1>{isloginForm ? "Login" : "Signup"}</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              ref={passRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {isloginForm ? "Login" : "Signup"}
          </button>
          <p>{isLoading && "Loading....."}</p>
        </form>

        <div className="my-3">
          <p>
            <a href="#" onClick={formHandler} style={{ cursor: "pointer" }}>
              {isloginForm
                ? "Create a new account"
                : "login with existing account"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
