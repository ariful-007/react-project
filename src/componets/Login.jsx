import  { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked with username:', username, 'and password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 mt-3 mb-3">
      <form className="max-w-md w-full shadow-2xl p-12 rounded-sm">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-teal-400 text-black font-bold py-1 rounded-md hover:bg-slate-900 hover:text-white text-lg duration-500 w-full"
            type="submit"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;