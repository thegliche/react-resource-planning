import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="login">
      <form>
        <div className="inputs">
          <input type="text" placeholder="username or email" />
          <input type="password" placeholder="password" />
          <p className="light">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
      <footer>
        <button>Continue</button>
        <p>
          {'Do not have an account?'} <a href="#">Sign Up</a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
