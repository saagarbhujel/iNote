import axios from "axios";
import React,{useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from '../context/alerts/AlertContext'

const Signup = () => {
  const [credentials, setCredentials] = useState({name:"", email:"", password:""});
  const navigate = useNavigate();

//ALERT_CONTEXT 
const context = useContext(AlertContext)
 const {showAlert} = context;


const handleSubmit = async(e) => {
  e.preventDefault();
  try {
     const response = await axios.post("http://localhost:4000/api/auth/createuser", {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password
  },{
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(response.data);


  if (response.data.success) {
    navigate("/login");
    showAlert("User created successfully", "Success");
  } else {
    showAlert("User creation failed","Error")
  }
}
   catch (error) {
    console.log(error);
        
showAlert("User creation failed","Error");
  }
}
  

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
                // value={credentials.name}
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
                // value={credentials.email}
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
                minLength={8}
                onChange={onChange}
                // value={credentials.password}
                autoComplete="new-password"
                placeholder="Enter your password"
              />
            </div>
            {/* <div className="mb-4">
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
                minLength={8}
                onChange={onChange}
                // value={credentials.cpassword}
                autoComplete="new-password"
                placeholder="Enter your password"
              />
            </div> */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-purple-900 text-white py-2 px-4 rounded focus:outline-none hover:bg-purple-600"
              >
                Sign Up
              </button>
              <Link to="/login" className="text-gray-600 hover:text-purple-700">
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
