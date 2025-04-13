import React from 'react';

const Register = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <div>
          <label>Full Name</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" className="border p-2 w-full" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
