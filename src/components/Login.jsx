import axios from 'axios'
import React, {useState} from 'react'


const Login = () => {
  const [credentials, setCredentials] = useState({email:"", password:""})

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
    console.log(accessToken)
    
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
    }

  
  }
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }; 
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
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
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login