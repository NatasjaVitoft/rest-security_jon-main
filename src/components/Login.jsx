import { useState } from 'react';
import facade from '../facades/loginFacade';


export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

   const handleLogin = () => {
    facade.login(username, password, (success) => {
      if (success) {
        // Redirect or perform any other necessary action upon successful login.
        console.log('Login successful', username, password );
      } else {
        setMessage('Invalid credentials. Please try again.');
      }
    });
  };


  return (
    <div className="Login">
      <h1>Login Page</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
