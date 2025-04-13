import React from 'react';

const Login = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" className="border p-2 w-full" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
