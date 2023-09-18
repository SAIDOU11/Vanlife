import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

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
      <form>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
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
