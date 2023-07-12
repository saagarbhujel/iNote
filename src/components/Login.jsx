import axios from 'axios'
import React, {useContext, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import AlertContext from '../context/alerts/AlertContext';



const Login = () => {

  const context = useContext(AlertContext)
  const {showAlert} = context

  const [credentials, setCredentials] = useState({email:"", password:""})
    const navigate = useNavigate();
  
   

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
         const response = await axios.post("http://localhost:4000/api/auth/login",{
          email:credentials.email,
          password:credentials.password
         }, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(response.data)
    const accessToken = response.data.authToken


    if (response.data.success) {
      //Save the auth token and redirect
      console.log("logged in")
      localStorage.setItem('token', accessToken)
      navigate('/')
      showAlert("Login success","success")
    } else {
      console.log("not logged in")
      showAlert("Login error","error")
    }
    
    } catch (error) {
       if (error.response) {
         // The request was made and the server responded with a status code
         console.log(error.response.data); // Response data from the server
         console.log(error.response.status); // Status code
         console.log(error.response.headers); // Response headers
       } else if (error.request) {
         // The request was made but no response was received
         console.log(error.request);
       } else {
         // Something happened in setting up the request that triggered an error
         console.log("Error", error.message);
       }
       showAlert("Login Failed", "danger")
    }

  
  }
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }; 
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
                type="submit"
              >
                Log in
              </button>
              <Link to="/signup" className="text-gray-600">
                Didn't have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default Login