
function LoginFacade() {
  const login = async (username, password, callback) => {
    try {
      const response = await fetch("http://localhost:3001/");

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const users = await response.json();
      if (users.length === 1) {
        const user = users[0];
        callback(true, user);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      callback(false, null);
    }
  };

  return {
    login,
  };
}

const loginFacade = LoginFacade();
export default loginFacade;
