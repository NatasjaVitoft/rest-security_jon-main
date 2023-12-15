import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUsername = 'user';
    const mockPassword = 'password';

    if (username === mockUsername && password === mockPassword) {
      console.log('Successful login');
      navigate('/indkøbskurv');
    } else {
      // Invalid credentials, display an error message
    ('Invalid username or password');
    }
  };

  const handleSignup = () => {
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text" placeholder = "Enter username" id ="username" value={username} onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password" placeholder = "Enter password" id= "password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}> Login </button>
      </form>
      Dont have a user ? 
        <button type="button" onClick={handleSignup}> Create Account </button>
    </div>
  );
};

export default Login;
