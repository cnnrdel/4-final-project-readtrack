import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, like validation and sending data to backend
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="firstName">First Name</label>
              <input type="text" placeholder="First Name"
                     name="firstName" onChange={handleChange}
                     className="w-full px-4 py-2 mt-2 border rounded-md"
                     value={formData.firstName}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="lastName">Last Name</label>
              <input type="text" placeholder="Last Name"
                     name="lastName" onChange={handleChange}
                     className="w-full px-4 py-2 mt-2 border rounded-md"
                     value={formData.lastName}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">Email</label>
              <input type="email" placeholder="Email"
                     name="email" onChange={handleChange}
                     className="w-full px-4 py-2 mt-2 border rounded-md"
                     value={formData.email}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input type="password" placeholder="Password"
                     name="password" onChange={handleChange}
                     className="w-full px-4 py-2 mt-2 border rounded-md"
                     value={formData.password}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" placeholder="Confirm Password"
                     name="confirmPassword" onChange={handleChange}
                     className="w-full px-4 py-2 mt-2 border rounded-md"
                     value={formData.confirmPassword}
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-gray-800 rounded-lg hover:bg-gray-700">Sign Up</button>
              <a href="/login" className="text-sm text-blue-600 hover:underline">Already have an account? Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;