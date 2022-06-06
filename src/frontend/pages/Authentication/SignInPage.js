import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/authConstants";
import { useAuth } from "../../contexts";
import { signInService } from "../../services";
import "./Authentication.css";

function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const signInHandler = async (user) => {
    const authToken = await signInService(user);
    if (authToken !== undefined) {
      localStorage.setItem(AUTH_TOKEN, authToken);
      setAuth((auth) => ({
        ...auth,
        status: true,
        token: authToken,
      }));
      navigate("/");
    }
  };

  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          signInHandler(user, setAuth, navigate);
        }}
      >
        <h1>Sign In</h1>
        <div className="input-group input-email">
          <label htmlFor="form-email">Email*</label>
          <input
            className="input"
            type="email"
            name="form-email"
            id="form-email"
            placeholder="johndoe@gmail.com"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="input-group input-password">
          <label htmlFor="form-password">Password*</label>
          <input
            className="input"
            type="password"
            name="form-password"
            id="form-password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="input-submit">
          <button type="submit" className="btn btn-pink btn-auth">
            Sign In
          </button>
        </div>
        <div className="input-submit">
          <button
            type="button"
            className="btn btn-pink-secondary btn-auth"
            onClick={(e) => {
              e.preventDefault();
              signInHandler(
                {
                  email: "johndoe@gmail.com",
                  password: "johndoe",
                },
                setAuth,
                navigate
              );
            }}
          >
            Sign In as a Guest
          </button>
        </div>
        <span className="auth-link-message">
          New here?{" "}
          <Link to="/signup" className="auth-link">
            Create an account!
          </Link>
        </span>
      </form>
    </div>
  );
}

export { SignInPage };
