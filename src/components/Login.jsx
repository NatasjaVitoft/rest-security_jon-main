import  { useState } from 'react';
import facade from '../facades/loginFacade';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      facade.login(username, password, (success, user) => {
        if (success) {
          console.log('Login successful:', user);
          // Handle successful login, e.g., redirect to another page
        } else {
          console.error('Login failed');
          setError('Login failed. Please check your credentials.');
        }
      });
    };

    return (
        <div>
          <h1>Login Page</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      );
    };
    
    export default Login;