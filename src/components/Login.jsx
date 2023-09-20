import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../Api.jsx';

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const lastPath = location.state?.path || '/host';

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem('loggedin', true);
        navigate(lastPath, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus('idle');
      });
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

      {error?.message && <h2 className="login-error">{error.message}</h2>}

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
        <button disabled={status === 'submitting'} className="link-lg link">
          {status === 'submitting' ? 'Logging in' : 'Log in'}
        </button>
      </form>

      <p>
        Don’t have an account? <span className="orange">Create one now</span>{' '}
      </p>
    </div>
  );
};

export default Login;
