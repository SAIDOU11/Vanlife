import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
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
      {location.state?.message && <h1>{location.state.message}</h1>}
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
          name="email"
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />{' '}
        <button className="link-lg link">Login</button>
      </form>

      <p>
        Don’t have an account? <span className="orange">Create one now</span>{' '}
      </p>
    </div>
  );
};

export default Login;
