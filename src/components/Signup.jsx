import React,{useState} from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({name:"", email:"", password:""});


  

  const onChange =(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value});
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-sm md:max-w-md w-full bg-white shadow-md p-6 rounded ">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                required
                onChange={onChange}
                value={credentials.name}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                required
                onChange={onChange}
                value={credentials.email}
                autoComplete="username"
                placeholder="Enter email address"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                required
                onChange={onChange}
                value={credentials.password}
                autoComplete="new-password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cpassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                required
                onChange={onChange}
                value={credentials.cpassword}
                autoComplete="new-password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
              >
                Sign Up
              </button>
              <Link to="/login" className="text-gray-600">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
