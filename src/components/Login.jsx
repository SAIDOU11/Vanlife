import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loginUser } from '../Api.jsx';

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginFormData).then((data) => console.log(data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {location.state?.message && (
        <h2 className="login-error">{location.state.message}</h2>
      )}

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />{' '}
        <button className="link-lg link">Log in</button>
      </form>

      <p>
        Don’t have an account? <span className="orange">Create one now</span>{' '}
      </p>
    </div>
  );
};

export default Login;
